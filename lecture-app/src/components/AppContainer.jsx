import React, { Component, Fragment } from 'react';
import FilmList from './FilmList'
import DrinkList from './DrinkList';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <h1>React Routes Lecture</h1>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/films">Films</Link>
                    <Link to="/drinks">Drinks</Link>
                    <Route path="/films">
                        <FilmList />
                    </Route>
                    <Route path="/drinks">
                        <DrinkList />
                    </Route>
                </Router>
            </Fragment>
        )
    }
}

export default AppContainer;