import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'  // Step 1

/**
 * Step 1: Import the contacts from the json file
 * Step 2: Create a property in state called fiveContacts and set the value to the first five contacts using splice()
 * Step 3: 
 */

class App extends Component {
  state = {
    fiveContacts: contacts.slice(0,5) // slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  }

  displayContacts = () => {
    let arrayOfHTML = this.state.fiveContacts.map((eachContact, index) => {
      return (
        // why you need unique keys for React lists - https://reactjs.org/docs/lists-and-keys.html#keys
        // why you need unique keys for React lists - https://medium.com/@adhithiravi/why-do-i-need-keys-in-react-lists-dbb522188bbb
        <tr key={eachContact.name}>
          <td><img src={eachContact.pictureUrl} alt={eachContact.name} width="50px"/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
        </tr>)
    })
    console.log(arrayOfHTML)
    return arrayOfHTML
  }

  render() {
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* HTML table - https://www.w3schools.com/tags/tag_thead.asp */}
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>  
      </div>
    );
  }
}

export default App;
