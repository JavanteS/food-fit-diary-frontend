import React, { Component } from 'react';
import MealInput from "../meals/mealinput"
import Meals from "../meals/meals"
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchMeals, deleteMeal} from "../actions/meals"
import NavBar from '../Navbar'


class MealsContainer extends Component {

    componentDidMount(){
        this.props.fetchMeals()
      }

    // state={
    //    render: false
    // }

    // handleClick =()=>{
    //     const { render } = this.state
    //     this.setState({
    //         render: !render
    //     })
    // }

    render(){
        // const { render } = this.state
        return(
           <div>
                <NavBar/>
                <Route exact path="/" render={() => <h1>Home!</h1>}/>
                <Route path="/meals/new" component={MealInput}/>
                <Route exact path="/meals" render={()=><Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} />}/>
                
               {/*  */}
               {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add Meal</button>
               {render ? <MealInput/>:null} */}
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