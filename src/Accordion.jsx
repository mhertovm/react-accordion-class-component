import React from 'react';

class Accordion extends React.Component{
    constructor() {
        super();
        this.state = {
            isActive: false,
        };
      }
      
    change = () => {this.state.isActive ? this.setState({isActive : false}) : this.setState({isActive : true})}

    render(){
        return(
            <div>
                <div  className="accordion" style={{textDecorationLine: "underline"}}>
                    <div>{this.props.name}</div>
                    <div onClick={this.change}>{this.state.isActive ? '-' : '+'}</div>
                </div>
                {this.state.isActive && <div style={{color:"red"}}>{this.props.capital}</div>}
            </div>
        )
    }
}

export default Accordion;