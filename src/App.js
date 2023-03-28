import './App.css';
import Accordion from "./Accordion"
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      countrys : []
    };
  }
  componentDidMount() {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
      this.setState({
        countrys: res.data
      })
    })
  }
  render(){
    return (
      this.state.countrys.map((value, index)=>{
        return(
          <div className="App">
          <Accordion name={value.name} capital={value.capital}/>
          </div>
        )})
    )
  }
}

export default App;
