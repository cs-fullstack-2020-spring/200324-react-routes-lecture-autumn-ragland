import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FilmList from './FilmList';
import DrinkList from './DrinkList';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Check</h1>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/DrinkList">Drink List</Link>
                    <Link to="/FilmList">Film List</Link>
                    <Route path="/FilmList"><FilmList/></Route>
                    <Route path="/DrinkList"><DrinkList/></Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer;