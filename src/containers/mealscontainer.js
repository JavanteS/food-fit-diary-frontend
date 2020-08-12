import React, { Component } from 'react';
import MealInput from "../meals/mealinput"


class MealsContainer extends Component {

    state={
       render: false
    }

    handleClick =()=>{

        const { render } = this.state
        this.setState({
            render: !render
        })
        // return 
    }

    


    render(){
        const { render } = this.state
        return(
           <div>

               <button onClick={this.handleClick}>Add Meal</button>
               {render ? <MealInput/>:null}
            

        </div> 
        )
        
    }
}

export default MealsContainer;