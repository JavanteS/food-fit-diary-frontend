import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMeal} from "../actions/meals"

class MealInput extends Component {


    state={
        name: "",
        category: "",
        calories: ""

    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const meal = {name: this.state.name, category: this.state.category, calories: this.state.calories}
        this.props.addMeal(meal)
        this.setState({
            name: "",
            category: "",
            calories: ""
        })

    }


    render(){
        return (

            <div>
               <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>
                
                <label>Category</label>
                <input type="text" onChange={this.handleChange} value={this.state.category} name="category"/>

                <label>Calories</label>
                <input type="text" onChange={this.handleChange} value={this.state.calories} name="calories"/>
                <input type="submit"/>
            </form>  
            </div>
           
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     addMeal: name => dispatch({ type: "ADD_MEAL", name }),
//     delete: id=> dispatch({type: "DELETE_MEAL", id})
//   })

export default connect(null, {addMeal})(MealInput);