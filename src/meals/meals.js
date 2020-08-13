import React, { Component } from 'react';
import Meal from "./meal"

class Meals extends Component {

    renderBreakfast=()=>{
        
    }

    render(){
        return (

            <div class="container-md">
            <ul>
            {this.props.meals.map(meal=> <Meal key={meal.id} meal={meal} deleteMeal={this.props.deleteMeal} />)}
            </ul>
            </div>

            // <table className="table">
            //     <thead>
            //         <tr>
            //         <th scope="col">Today's date</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //     <tr>
            //     <th scope="row">Breakfast</th>
            //     </tr>
            //     </tbody>
            // </table>

        )
            
        
        
    }
}

export default Meals;