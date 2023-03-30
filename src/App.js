import './App.css';
import Accordion from "./Accordion"
import React, { Component } from 'react';
import Pagination from './Pagination';

class App extends Component {
  constructor(){
    super();
    this.state = {
      countrys : [],
      currentPage:1,
      contriesPerPage:10
    };
  }
  componentDidMount() {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
    .then(res => res.json())
    .then((res) => {
      this.setState({
        countrys: res.data
      })
    })
  }

  paginate = (number) => this.setState({currentPage:number});

  render(){

 
    const lastCountryIndex = this.state.currentPage * this.state.contriesPerPage
    const firstCountryIndex = lastCountryIndex - this.state.contriesPerPage
    const currentCountry = this.state.countrys.slice(firstCountryIndex, lastCountryIndex)

    return (
      <div >
      {currentCountry.map((value, index)=>{
        return(
          <div key={index}>
          <Accordion name={value.name} capital={value.capital}/>
          </div>
        )})}
        <div className='pagination'>
          <Pagination contriesPerPage={this.state.contriesPerPage} totalCountrys={this.state.countrys.length} paginate={this.paginate}/>  
        </div>   
      </div>
    )
  }
}

export default App;
