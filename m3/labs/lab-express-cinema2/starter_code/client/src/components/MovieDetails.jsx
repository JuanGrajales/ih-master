import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class MovieDetails extends Component {
  state = {
    movieObj: {}
  }

  componentDidMount = () => {
    Axios.get(`http://localhost:5000/movie/${this.props.match.params.movieId}`)
    .then(res => {
      console.log('good response', res)
      this.setState({
        movieObj: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <button><Link to='/movies'>Go back</Link></button>
        <h1>{this.state.movieObj.title}</h1>
        <h2>{this.state.movieObj.director}</h2>
        <img src={this.state.movieObj.image} alt={this.state.movieObj.image} />
      </div>
    );
  }
}

export default MovieDetails;