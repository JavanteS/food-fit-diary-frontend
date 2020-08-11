import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render(){
     return (
    <div className="App">
     Food Fit Diary
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

export default connect(mapStateToProps)(App);
