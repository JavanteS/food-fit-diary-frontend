import React, { Component } from 'react';
import Meal from "./meal"

class Meals extends Component {

    renderBreakfast=()=>{
        
    }

    render(){
        return (

            <div className="container-md">
                <div className="card">
                 {this.props.meals.map((meal,index)=> <Meal key={index} meal={meal} deleteMeal={this.props.deleteMeal} />)}
                </div>
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