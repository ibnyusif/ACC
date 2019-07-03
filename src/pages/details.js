import React,{Component} from 'react';
import {Link} from "react-router-dom"


class Details extends Component {
    constructor(props) {
        super(props);  
        };

  render(){
      const{data}= this.props.location
    return (
      <>
      <div className='container'>
        <div className="card">
         <img src={this.props.item.imageUrl} className="card-img-top" width={200} height={200}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={{pathname:'/details',data:this.props.item}} className="btn btn-primary">
        view details
        </Link>
      </div>
    </div>
    </div>
      </>
    );
  }
   
}

export default Details;