import React from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import { API_KEY } from "./components/utils";

class App extends React.Component {
  state = {
    recipes: [],
    ingredient: ""
    // sort: "t",
    // loading: false
  };

  getRecipe = async e => {
    e.preventDefault();
    // this.setState({ loading: true });
    const recipeName = e.target.elements.recipeName.value;
    let url = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`;
    //url += this.state.sort === "r" ? "&sort=r" : "";
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes,
      ingredient: recipeName
      // loading: false
    });
  };

  // handleSort = async e => {
  //   const sort = e.target.id;
  //   if (sort !== this.state.sort) {
  //     let url = `https://www.food2fork.com/api/search?key=${API_KEY}`;
  //     url += this.state.ingredient ? `&q=${this.state.ingredient}` : "";
  //     url += sort === "r" ? "&sort=r" : "";
  //     console.log(url);
  //     const api_call = await fetch(url);
  //     const data = await api_call.json();
  //     this.setState({ recipes: data.recipes, sort });
  //   }
  // };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const ingredient = localStorage.getItem("ingredient");
    if (json) {
      const recipes = JSON.parse(json);
      this.setState({ recipes, ingredient });
    } else {
      fetch(`https://www.food2fork.com/api/search?key=${API_KEY}`)
        .then(result => result.json())
        .then(data => this.setState({ recipes: data.recipes }));
    }
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
    localStorage.setItem("ingredient", this.state.ingredient);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes
          recipes={this.state.recipes}
          ingredient={this.state.ingredient}
          handleSort={this.handleSort}
          sort={this.state.sort}
          // loading={this.state.loading}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
