import React, { Component } from 'react'
import Random from "./random"

export default class Navbar extends Component {
  render() {
    console.log(this.props)
    let randomVar = "Stefan"
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <Random number={this.props.propForRandom}/>
      </div>
    )
  }
}

// function navbar(){
//     console.log("hello")
// }

// function navbar(name){
//     console.log("hello", name)
// }

// function startGame(name){
//   resetEverthing(name)
//   setupPlayer()
// }
