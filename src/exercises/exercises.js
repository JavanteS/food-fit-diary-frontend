import React, { Component } from 'react';


class Exercises extends Component {

    handleClick=(event)=>{
        this.props.deleteExercise(event.target.id)
    }

    render(){
        return (
            <div>
                {this.props.exercises.map((e,index) => <div><li key={index}>{e.name}</li><button onClick={this.handleClick} id={e.id}>X</button></div>)}
            </div>)
    }
}

export default Exercises