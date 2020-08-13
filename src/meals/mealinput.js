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
            <div className="col-6 mx-auto">
                <div className="shadow p-3 mb-5 ">
                    <div className="card h-100 justify-content-center" >
                        <div className="card-header">
                            Add a Meal
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>

                                <label>Name</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Meal's Name"/>
                
                                <label>Category</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.category} name="category" placeholder="Category"/>
                

                
                                <label>Calories</label>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.calories < 0 ? "Can't be negative":this.state.calories} name="calories" placeholder="Calories"/>
             
                                <hr/>
                                <input className="btn btn-primary" type="submit"/>
                                </form>
                                </div> 
                            </div>
                        </div>
                    </div>
           
        )
    }
}

export default connect(null, {addMeal})(MealInput);