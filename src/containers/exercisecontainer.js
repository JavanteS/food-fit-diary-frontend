import React, { Component } from 'react';
import ExerciseInput from "../exercises/exerciseinput"
import { connect } from 'react-redux';
import {fetchExercises} from "../actions/exercises"
import {Route} from 'react-router-dom'
import NavBar from '../Navbar'

class ExerciseContainer extends Component{

    componentDidMount(){
        this.props.fetchExercises()
      }
    
    
    render(){

        return (
           <div>
               {!<NavBar/> ? <NavBar/>:null}
               <Route path="/workouts" component={ExerciseInput}/>
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

export default connect(mapStateToProps,{fetchExercises})(ExerciseContainer)