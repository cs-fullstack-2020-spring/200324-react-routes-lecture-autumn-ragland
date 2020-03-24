import React, { Component, Fragment } from 'react';

class DrinkList extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            listOfDrinks: [] // array to hold objects from fetch
        }
    }
    // lifecycle method to call fetch
    componentDidMount = () => {
        this.loadData();
    }
    // async await fetch
    loadData = async () => {
        // fetch from api
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        // call json method on value returned from fetch
        const json = await response.json();
        // console.table(json.drinks); // view results (code a little test a little)
        // set state of array to array of objects from fetch
        this.setState({ listOfDrinks: json.drinks });
    }
    // display title and list of drinks using map
    render() {
        return (
            <Fragment>
                <h1>List of Drinks</h1>
                {
                    this.state.listOfDrinks.map((drink) => {
                        return (
                            <div key={drink.idDrink}>
                                <p>Drink Name: {drink.strDrink}</p>
                                <p>Drink Instructions : {drink.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default DrinkList;