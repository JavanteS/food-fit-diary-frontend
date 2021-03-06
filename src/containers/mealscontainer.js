import React, { Component } from 'react';
import MealInput from "../meals/mealinput"
import Meals from "../meals/meals"
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchMeals, deleteMeal} from "../actions/meals"
import NavBar from '../Navbar'
import Home from '../Home'


class MealsContainer extends Component {

    componentDidMount(){
        this.props.fetchMeals()
      }

    handleClick=(event)=>{
        this.props.deleteMeal(event.target.id)
    }

   

    render(){
        
        return(
           <div>
                <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/meals" render={()=><Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} handleClick={this.handleClick} />}/>
                <Route path="/meals/new" component={MealInput}/>
        </div> 
        )
        
    }
}

const mapStateToProps = state => {
    return {
      meals: state.mealReducer.meals,
      loading: state.mealReducer.loading
    }
  }
  
  export default connect(mapStateToProps, {fetchMeals, deleteMeal})(MealsContainer);