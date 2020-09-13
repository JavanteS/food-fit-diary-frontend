import React, {Component} from "react"



class Exercise extends Component{


    // state ={
    //     counter: 0
    // }

    // buttonClick = ()=>{
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }




    render(){
        return(
            <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                {this.props.exercise.name}
                                </div>
                                <div className="col-sm">
                                {this.props.exercise.duration}
                                </div>
                                <div className="col-sm">
                                {this.props.exercise.date}
                                </div>
                                <div className="col-sm">
                                {this.props.exercise.calories} calories <button id={this.props.exercise.id} onClick={this.props.handleClick}>X</button>
                                {/* <button onClick={this.buttonClick}>{this.state.counter}</button> */}
                                </div>
                            </div>
                        </div>
        )
    }
} 


export default Exercise;