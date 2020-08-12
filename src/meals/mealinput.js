import React, { Component } from 'react';
import { connect } from 'react-redux';

class MealInput extends Component {


    state={
        name: "",
        category: "",
        calories: null

    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()

    }


    render(){
        return (

            <div>
               <form>
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

const mapDispatchToProps = dispatch => ({
    addMeal: name => dispatch({ type: "ADD_MEAL", name }),
    delete: id=> dispatch({type: "DELETE_MEAL", id})
  })

export default connect(null, mapDispatchToProps)(MealInput);