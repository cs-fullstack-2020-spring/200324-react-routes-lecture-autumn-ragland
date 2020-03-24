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
                <h1>React Routes Lecture</h1>
                <Router>
                    <Link className="routeLink" to="/">Home</Link>
                    <Link className="routeLink" to="/DrinkList">Drink List</Link>
                    <Link className="routeLink" to="/FilmList">Film List</Link>
                    <Route path="/FilmList"><FilmList/></Route>
                    <Route path="/DrinkList"><DrinkList/></Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer;