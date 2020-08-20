import React, { Component } from 'react'
import Axios from 'axios'

export default class NewMovie extends Component {
  state = {
    title: '',
    image: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5000/movie/add', this.state)
    .then(res => {
      console.log(res)
      this.props.history.push('/')
    })
    .catch(err => console.log(err))
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input name="title" type='text' placeholder='title' onChange={e => this.handleChange(e)} />
        <input name="image" type='text' placeholder='image' onChange={e => this.handleChange(e)} />
        <input type='submit' />
      </form>
    )
  }
}
