import React, { Component } from 'react';

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFilms: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        console.log("Fetching Films!");
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const json = await response.json();
        console.table(json);
        this.setState({ listOfFilms: json });
    }
    render() {
        return (
            this.state.listOfFilms.map((film) => {
                return (
                    <div key={film.id}>
                        <p>Film Name : {film.title}</p>
                        <p>Film Description :{film.description}</p>
                        <hr/>
                    </div>
                )
            }
            )
        );
    }
}

export default FilmList;