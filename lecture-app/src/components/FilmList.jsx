import React, { Component, Fragment } from 'react';

class FilmList extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            listOfFilms: [] // array to hold list of objects from fetch
        }
    }
    // lifecycle method to call fetch
    componentDidMount = () => {
        this.loadData();
    }
    // async await fetch
    loadData = async () => {
        // fetch from api
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        // call json method on value returned from fetch
        const json = await response.json();
        // console.table(json); // view results (code a little test a little)
        // set state of array to array of objects from fetch
        this.setState({ listOfFilms: json });
    }
    // display title and list of drinks using map
    render() {
        return (
            <Fragment>
                <h1>List of Films</h1>
                {
                    this.state.listOfFilms.map((film) => {
                        return (
                            <div key={film.id}>
                                <p>Film Name: {film.title}</p>
                                <p>Film Description: {film.description}</p>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default FilmList;