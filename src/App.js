import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMeals} from "./actions/meals"
import MealsContainer from "./containers/mealscontainer"
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchMeals()
  }

  render(){
    
    // const meal = this.props.meals.map((meal,i)=> <li key={i}>{meal.name}</li>)
     return (
    <div className="App">
     Food Fit Diary

      
     
       {/* {meal} */}
     
     <MealsContainer meals={this.props.meals}/>
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

export default connect(mapStateToProps, {fetchMeals})(App);
