import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    colorChange = () => {
        console.log(this.state.color)
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div onClick={this.colorChange} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }
}