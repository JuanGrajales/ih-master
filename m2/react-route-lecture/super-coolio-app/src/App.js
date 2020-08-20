import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// the {} are used when the component is exported not using export default
// when the export default is used then you don't need to use {} when importing the component
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'

export default class App extends Component {
  state = {
    userLoggedIn: true,
  }
  render() {
    return (
    <div>
      <nav>
        <ul>
          {/* Link works very similar to <a>, remmeber <a href="/home">Home</a> */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route
          path="/home"
          render={props => <Home {...props} />}
        />
        <Route
          path="/about"
          render={props => <About {...props} />}
        />
        <Route 
          path="/projects" 
          render={props => (
          this.state.userLoggedIn ? 
          (
            <Projects {...props} />
          ) : 
          (
            <Home {...props} />
          )
          // {/* if(condition){
          //   trueStatement
          // }
          // else{
          //   falseStatement
          // } */}
        )}/>
      </Switch>
    </div>
  )
}
}