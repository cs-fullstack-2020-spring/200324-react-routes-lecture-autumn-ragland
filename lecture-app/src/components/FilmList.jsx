import React, { Component, Fragment } from 'react';

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFilms: []
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const json = await response.json();
        console.table(json);
        this.setState({ listOfFilms: json });
    }

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