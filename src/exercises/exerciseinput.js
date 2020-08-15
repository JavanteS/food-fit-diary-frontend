import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addExercise} from '../actions/exercises'

class ExerciseInput extends Component{

    state={
        name: "",
        duration: "",
        calories: "",
        date: ""
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const exercise = {name: this.state.name, duration: this.state.duration, calories: this.state.calories, date: this.state.date}
        this.props.addExercise(exercise)
        this.setState({
            name: "",
            duration: "",
            calories: "",
            date: ""
        })

    }


    render(){
        return (
            <div className="col-6 mx-auto">
                <div className="shadow p-3 mb-5 ">
                    <div className="card h-100 justify-content-center" >
                        <div className="card-header">
                            Add Workout
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>

                                <label>Name</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Enter Exercise"/>
                
                                <label>Duration</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.duration} name="duration" placeholder="How long was the workout?"/>
                

                
                                <label>Calories Burned</label>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.calories < 0 ? "Can't be negative":this.state.calories} name="calories" placeholder="Calories"/>
             
                                <label>Date</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.date} name="date" placeholder="Enter date..."/>
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

export default connect(null, {addExercise})(ExerciseInput);