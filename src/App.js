import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMeals, deleteMeal} from "./actions/meals"
import MealsContainer from "./containers/mealscontainer"
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchMeals()
  }

  render(){
    
   
     return (
    <div className="App">
     Food Fit Diary

      
     
      
     
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
