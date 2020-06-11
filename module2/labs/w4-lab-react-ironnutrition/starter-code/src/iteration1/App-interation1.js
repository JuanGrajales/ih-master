import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// new imports
import foods from './foods.json'
import FoodBox from './components/foodbox'
import FoodForm from './components/foodForm'
import Search from './components/search'

class App extends Component {
  state = {
    allFoods: foods,
    filteredFoods: foods,
    showForm: false,
  }

  displayFood = () => {
    let newFoodArrayUsingFoodBoxComp = this.state.filteredFoods.map((eachFood, index) => {
      return(<FoodBox key={index} {...eachFood}/>)
      // return(<FoodBox key={index} name={eachFood.name} calories={eachFood.calories} image={eachFood.image} quantity={eachFood.quantity}/>)
    })

    return newFoodArrayUsingFoodBoxComp

    // this whole function could have also been written like this, this way it uses the spread operator
    // return this.state.allFoods.map((eachFood, index) => <FoodBox key={index} {...eachFood}/>)
  }

  addNewFoodToArray = (newFoodItem) => {
    // console.log(newFoodItem)
    let copyOfAllFoods = [...this.state.allFoods];
    copyOfAllFoods.unshift(newFoodItem);  // unshift add it to the beginning of the array instead of the end (if we used push)
    this.setState({ 
      allFoods: copyOfAllFoods, 
      showForm: false });
  }

  handleAddFoodClick = () => {
    this.setState({
      // we use !this.state.showForm so that the form will not show if the button is clicked again
      // if we just  said showForm: true then we would need to figure out another way to turn showForm back to false to not display the form
      showForm: !this.state.showForm, 
    })
  }

  filterFood = searchInput => {
    console.log(searchInput)
    let filteredFoodsCopy = this.state.allFoods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchInput.toLowerCase())
    )

    this.setState({ 
      filteredFoods: filteredFoodsCopy 
    })
  }

  render() {
    return (
      <div className="App">
        {/* <button className="button" onClick={this.handleClick}>
          Add Food
        </button>
        {this.state.form && <FoodForm pushFood={this.pushFood} />} */}
        <button className="button" onClick={this.handleAddFoodClick}>
          Add Food
        </button>
        <Search filterFood={this.filterFood}/>
        {/* do you understand why the following works? you are saying if showForm is true and FoodForm is true (i.e. it exist) then show the form */}
        {this.state.showForm && <FoodForm addNewFoodToArray={this.addNewFoodToArray}/>}
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
