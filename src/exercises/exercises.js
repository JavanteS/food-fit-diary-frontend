import React, { Component } from 'react';


class Exercises extends Component {

    

    render(){
        return (
            <div>
                <div className="card">
                    <h3>Workouts</h3>
                    {this.props.exercises.map((e,index) => <div key={index}><li >{e.name}</li><button onClick={this.handleClick} id={e.id}>X</button></div>)}
                </div>
            </div>)
    }
}

export default Exercises