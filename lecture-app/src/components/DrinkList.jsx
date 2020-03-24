import React, { Component, Fragment } from 'react';

class DrinkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfDrinks: []
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const json = await response.json();
        console.table(json.drinks);
        this.setState({ listOfDrinks: json.drinks });
    }

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