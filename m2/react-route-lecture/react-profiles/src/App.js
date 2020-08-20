import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'

export default class App extends Component {
  state = {
    userLoggedIn: false,
  }
  render() {
    return (
    <div>
      <nav>
        <ul>
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
        {/* <Route
          path="/projects"
          render={props => <Projects {...props} />}
        /> */}
        <Route 
          path="/projects" 
          render={props => (
          this.state.userLoggedIn ? (
            <Projects {...props} />
          ) : (
            <Home {...props} />
          )
        )}/>
      </Switch>
    </div>
  )
}
}