import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                {/* <NavLink
                to="/"
                exact
                >
                    Home
                </NavLink> */}

                <NavLink
                to="/meals"
                exact
                >
                    Diary
                </NavLink>
                
                <NavLink
                to="/meals/new"
                exact
                >
                    Log your Meal
                </NavLink>
                

                <NavLink
                to="/workouts/new"
                exact
                >
                    Log your Workout
                </NavLink>
                <NavLink
                to="/workouts"
                exact
                >
                    Workout Diary
                </NavLink>

             </div>
        )
    }

    
}

export default NavBar;