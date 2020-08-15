import React, { Component } from 'react';

class Meal extends Component {

    handleClick=(event)=>{
        this.props.deleteMeal(event.target.id)

    }
    render(){
        return (
        <div>
            
        {this.props.meal.name}<button id={this.props.meal.id} onClick={this.handleClick}>X</button>
        
        </div>)
    }
}

export default Meal;