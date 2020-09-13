import React, {Component} from 'react';
import Exercise from "./exercise"




class Exercises extends Component{
            
            render(){
                return (
                    <div className="container-md">
                <div className="card">
                    <div className="lead">Workouts</div>
                    <div className="row">
                    <div className="col sm ">
                        Exercise
                    </div>
                    <div className="col sm">
                        Duration
                    </div>
                    <div className="col sm">
                        Date
                    </div>
                    <div className="col sm">
                        Calories Burned
                    </div>
                    </div>
                    <hr/>
                    {this.props.exercises.map((exercise,index) => <Exercise key={index} exercise={exercise} handleClick={this.props.handleClick}/>)}
                </div>
            </div> 
                )
            }
            
           
 
}
export default Exercises