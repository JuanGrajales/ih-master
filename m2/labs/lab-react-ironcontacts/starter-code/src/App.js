import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
import contacts from './contacts.json';   // Step 1 import contacts form json

class App extends Component {
  state = {
    contactsShowing: contacts.splice(0,5), // this will alter the original contacts array
    remainingContacts: contacts
  }

  displayContacts = () => {
    return this.state.contactsShowing.map((eachContact, index) => {
      return (
        <tr key={eachContact.id}>
          <td><img width="100px" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
        </tr>
      )
    })
  }

  deleteContact = (index) => {
    let copyContactsShowing = [...this.state.contactsShowing]
    copyContactsShowing.splice(index, 1)
    this.setState({
      contactsShowing: copyContactsShowing
    })
  }

  addRandomContact = () => {
    if(this.state.remainingContacts.length){
      let randomIndex = Math.floor(Math.random() * this.state.remainingContacts.length)
      let randomContact = this.state.remainingContacts[randomIndex]
      let copyContactsShowing = [...this.state.contactsShowing]
      copyContactsShowing.push(randomContact)

      let copyRemainingContacts = [...this.state.remainingContacts]
      copyRemainingContacts.splice(randomIndex, 1)

      this.setState({
        contactsShowing: copyContactsShowing,
        remainingContacts: copyRemainingContacts
      })
    }
  }

  sortName = () => {
    let copyContactsShowing = [...this.state.contactsShowing]
    copyContactsShowing.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contactsShowing: copyContactsShowing
    })
  }

  sortPopularity = () => {
    let copyContactsShowing = [...this.state.contactsShowing]
    copyContactsShowing.sort((a,b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      contactsShowing: copyContactsShowing
    })
  }

  
  render() {
    return (
      <div className="App">
       <h1>Ironcontacts</h1>
       <button onClick={this.addRandomContact}>Add Contact</button>
       <button onClick={this.sortName}>Sort by Name</button>
       <button onClick={this.sortPopularity}>Sort by Popularity</button>
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
