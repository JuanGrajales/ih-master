import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>I'm in home</h1>
      </div>
    );
  }
}

export default Home;