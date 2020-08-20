import React, { Component } from 'react'
import Navbar from "./components/navbar"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="headerTop">Hi</h1>
        <Navbar name="nate" propForRandom="Gus"/>
      </div>
    )
  }
}

// navbar()
// navbar("nate")