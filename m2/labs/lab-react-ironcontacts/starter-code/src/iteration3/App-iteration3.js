import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

// change fiveContacts to contactsShowing

class App extends Component {
  state = {
    contactsShowing: contacts.splice(0,5), // slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    remainingContacts: contacts
  }

  displayContacts = () => {
    let arrayOfHTML = this.state.contactsShowing.map((eachContact, index) => {
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

  addRandomContact = () => {
    if(this.state.remainingContacts.length > 0){
      let randomIndex = Math.floor(Math.random()*this.state.remainingContacts.length) 
      let randomContact = this.state.remainingContacts[randomIndex]

      let contactsShowingCopy = [...this.state.contactsShowing]
      contactsShowingCopy.push(randomContact)

      let remainingContactsCopy = [...this.state.remainingContacts]
      remainingContactsCopy.splice(randomIndex, 1)

      this.setState({
        contactsShowing:contactsShowingCopy,
        remainingContacts: remainingContactsCopy
      })
    }

  }

  render() {
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}> Add Random </button>
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
