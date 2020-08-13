import React, { Component } from 'react';
import MealInput from "../meals/mealinput"
import Meals from "../meals/meals"


class MealsContainer extends Component {

    state={
       render: false
    }

    handleClick =()=>{

        const { render } = this.state
        this.setState({
            render: !render
        })
    }

    


    render(){
        const { render } = this.state
        return(
           <div>

               
               <Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} />
               <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add Meal</button>
               {render ? <MealInput/>:null}

        </div> 
        )
        
    }
}

export default MealsContainer;