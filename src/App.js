import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Recipes from "./components/Recipes"

const API_KEY = "6877f4b9c87de4c5665431af1d52b9b3";

class App extends Component {
  state = {
    recipes: [],
    ingredient: undefined
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({recipes: data.recipes, ingredient: recipeName});
  }

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const ingredient = localStorage.getItem('ingredient');
    const recipes = JSON.parse(json);
    this.setState({ recipes, ingredient })
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
    localStorage.setItem("ingredient", this.state.ingredient);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes
          recipes={this.state.recipes}
          ingredient={this.state.ingredient}
        />
      </div>
    );
  }
}

export default App;
