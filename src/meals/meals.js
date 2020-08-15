import React from 'react';
import Meal from "./meal"




const Meals = props => <div className="container-md">
                            <div className="card">
                                <div className="lead">Meals you had</div>
                                    <div className="row">
                                    <div className="col sm ">
                                    Category
                                    </div>
                                    <div className="col sm">
                                    Meals
                                    </div>
                                    <div className="col sm">
                                    Date
                                    </div>
                                    <div className="col sm">
                                    Calories 
                                    </div>
                                </div>
                                <hr/>
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