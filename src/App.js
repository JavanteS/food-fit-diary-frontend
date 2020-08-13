import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMeals, deleteMeal} from "./actions/meals"
import MealsContainer from "./containers/mealscontainer"
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchMeals()
  }

  render(){
    
   
     return (
    <div className="App">
     <nav className="navbar navbar-light bg-light">
     <h2>Food-fit-diary</h2>
     </nav>
     <MealsContainer deleteMeal={this.props.deleteMeal} meals={this.props.meals}/>
    </div>
  );
  }
 
}

const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals,
    loading: state.mealReducer.loading
  }
}

export default connect(mapStateToProps, {fetchMeals, deleteMeal})(App);
