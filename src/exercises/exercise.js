import React from "react"

const Exercise = props => <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                {props.exercise.name}
                                </div>
                                <div className="col-sm">
                                {props.exercise.duration}
                                </div>
                                <div className="col-sm">
                                {props.exercise.date}
                                </div>
                                <div className="col-sm">
                                {props.exercise.calories} calories <button id={props.exercise.id} onClick={props.handleClick}>X</button>
                                </div>
                            </div>
                        </div>


export default Exercise;