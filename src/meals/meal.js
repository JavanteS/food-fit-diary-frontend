import React, { Component } from 'react';

class Meal extends Component {
    render(){
        return <li>{this.props.meal.name}</li>
    }
}

export default Meal;