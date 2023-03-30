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
                <div onClick={this.change} className="accordion" style={{textDecorationLine: "underline"}}>
                    {this.props.name}
                    {this.state.isActive ? '-' : '+'}
                </div>
                {this.state.isActive && <div style={{color:"red"}}>{this.props.capital}</div>}
            </div>
        )
    }
}

export default Accordion;