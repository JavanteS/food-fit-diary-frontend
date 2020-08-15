import React from 'react';

const Meal = props=>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                {props.meal.category}
                                </div>
                            <div className="col-sm">
                                {props.meal.name}
                            </div>
                            <div className="col-sm">
                                {props.meal.date}
                            </div>
                            <div className="col-sm">
                                {props.meal.calories} calories<button id={props.meal.id} onClick={props.handleClick}>X</button>
                            </div>
                        </div>
                        
                    </div>
  

export default Meal;