import React, { Component } from "react";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
// import NewMovie from "./components/NewMovie";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <Route exact path='/movies' render={props => <Movies {...props} />} />
          <Route exact path='/movie/:movieId' render={props => <MovieDetails {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
