import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import NewMovie from './NewMovie'

class Movies extends Component {
  state = {
    movies: [],
    showForm: false
  }

  componentDidMount = () => {
    Axios.get('http://localhost:5000/movies')
    .then(res => {
      console.log(res)
      this.setState({
        movies: res.data
      })
    })
    .catch(err => console.log(err))
  }

  displayMovies = () => {
    return this.state.movies.map(movie => {
      return (
        <div key={movie._id}>
          <h1>{movie.title}</h1>
          <img src={movie.image} alt={movie.title} />
          <button><Link to={`/movie/${movie._id}`}>See more</Link></button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({showForm: !this.state.showForm})}>Add movie</button>
        {this.state.showForm? <NewMovie/> : ''}
        {this.displayMovies()}
      </div>
    );
  }
}

export default Movies;