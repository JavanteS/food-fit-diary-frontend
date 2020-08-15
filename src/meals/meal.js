import React from 'react';

const Meal = prop=><div>{this.props.meal.name}<button id={this.props.meal.id} onClick={this.props.handleClick}>X</button></div>
  

export default Meal;