import React, { Component } from 'react';

class Meal extends Component {

    handleClick=()=>{

    }
    render(){
        return (
        <div>
        {this.props.meal.name}<button id={this.props.meal.id} onClick={this.handleClick}>X</button>
        
        </div>)
    }
}

export default Meal;