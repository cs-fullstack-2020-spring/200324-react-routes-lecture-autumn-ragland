import React, { Component } from 'react';

class DrinkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfDrinks: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        console.log("Fetching Drinks!");
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const json = await response.json();
        console.table(json.drinks);
        this.setState({ listOfDrinks: json.drinks });
    }
    render() {
        return (
            this.state.listOfDrinks.map((drink) => {
                return (
                    <div key={drink.idDrink}>
                        <p>Drink Name : {drink.strDrink}</p>
                        <p>Drink Instructions :{drink.strInstructions}</p>
                        <hr/>
                    </div>
                )
            }
            )
        );
    }
}

export default DrinkList;