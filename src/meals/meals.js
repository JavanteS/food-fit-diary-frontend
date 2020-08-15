import React from 'react';
import Meal from "./meal"




const Meals = props => <div className="container-md">
                        <div className="card">
                            <h3>Meals you had</h3>
                            {props.meals.map((meal,index)=> <Meal key={index} meal={meal} deleteMeal={props.deleteMeal} />)}
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