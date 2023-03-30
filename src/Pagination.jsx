import React from 'react';

class Pagination extends React.Component{
    constructor() {
        super();
        this.state = {

        };
      }

      
    render(){
        const pageNumbers=[]
        for (let i=1; i < Math.ceil(this.props.totalCountrys/ this.props.contriesPerPage); i++){
            pageNumbers.push(i);
        }
        console.log(pageNumbers)
        return(
            <div>
                {pageNumbers.map(number => {
                    return(
                    <button key={number} onClick={()=>this.props.paginate(number)}>{number}</button>
                    )
                })}
            </div>
        )
    }
}

export default Pagination;