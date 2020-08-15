import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {fetchMeals, deleteMeal} from "./actions/meals"
import MealsContainer from "./containers/mealscontainer"
import ExerciseContainer from "./containers/exercisecontainer"

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  

  render(){
    // deleteMeal={this.props.deleteMeal} meals={this.props.meals}
   
     return (
    <div className="App">
     <nav className="navbar navbar-light bg-light">
     <h2>Food-Fit-Diary</h2>
     </nav>
     <MealsContainer />
     <ExerciseContainer/>
     
    </div>
  );
  }
 
}

// const mapStateToProps = state => {
//   return {
//     meals: state.mealReducer.meals,
//     loading: state.mealReducer.loading
//   }
// }

// export default connect(mapStateToProps, {fetchMeals, deleteMeal})(App);
export default App
