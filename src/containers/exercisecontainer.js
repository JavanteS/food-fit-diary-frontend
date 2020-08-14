import React, { Component } from 'react';
import ExerciseInput from "../exercises/exerciseinput"
import { connect } from 'react-redux';
import {fetchExercises, deleteExercise} from "../actions/exercises"
import {Route} from 'react-router-dom'
import NavBar from '../Navbar'
import Exercises from "../exercises/exercises"
class ExerciseContainer extends Component{

    componentDidMount(){
        this.props.fetchExercises()
      }
    
    
    render(){
        
        return (
           <div>
               {!<NavBar/> ? <NavBar/>:null}
               <Route path="/workouts" component={ExerciseInput}/>
               <Exercises exercises={this.props.exercises}/>
           </div> 
        )
        
    }
}

const mapStateToProps = state => {
    return {
      exercises: state.exerciseReducer.exercises,
      loading: state.exerciseReducer.loading
    }
  }

export default connect(mapStateToProps,{fetchExercises, deleteExercise})(ExerciseContainer)