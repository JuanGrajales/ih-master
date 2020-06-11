import React from "react";

class Search extends React.Component {
  state = {
    input: ""
  };
  handleSearch = event => {
    // const { value } = event.target;
    console.log(event.target.value)
    let value = event.target.value
    this.props.filterFood(value);
    this.setState({
      input: value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;