import React from 'react';
import Meal from "./meal"




const Meals = props => <div className="container-md">
                        <div className="card">
                        <div className="lead">Meals you had</div>
                            {props.meals.map((meal,index)=> <Meal key={index} meal={meal} deleteMeal={props.deleteMeal} handleClick={props.handleClick} />)}
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

    

export default Meals;