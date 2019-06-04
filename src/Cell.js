import React, { Component } from 'react'

class Cell extends Component {
  constructor (props) {
    super(props)

    this.state = {
      color: this.props.value
    }
  }

  changeStateForColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render () {
    return (
      <div onClick={this.changeStateForColor} className='cell' style={{ backgroundColor: this.state.color }} />
    )
  }
}

export default Cell
