import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                <NavLink
                to="/"
                exact
                >
                    Home
                </NavLink>
                <NavLink
                to="/meals/new"
                exact
                >
                    Form
                </NavLink>
                <NavLink
                to="/meals"
                exact
                >
                    Diary
                </NavLink>

                <NavLink
                to="/workouts"
                exact
                >
                    Workouts
                </NavLink>

             </div>
        )
    }

    
}

export default NavBar;