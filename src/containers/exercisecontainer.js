import React, { Component } from 'react';
import ExerciseInput from "../exercises/exerciseinput"
import {Route} from 'react-router-dom'
import NavBar from '../Navbar'

class ExerciseContainer extends Component{
    
    
    render(){

        return (
           <div>
               {!<NavBar/> ? <NavBar/>:null}
               <Route path="/workouts" component={ExerciseInput}/>
               
            {/* <ExerciseInput/> */}
           </div> 
        )
        
    }
}

export default ExerciseContainer