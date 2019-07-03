import React, { Component } from "react";
import Item from "./Item";

class Itemcomtainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount(){
      const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"


      fetch(url)
      .then(response => response.json())
      .then(data=>{
          this.setState({items: data})
          console.log(data)
      })

  }

  render() {
    return (
      <>
        <div className='row'>
            {this.state.items.map((item,key)=>{
                console.log(item)
                return(
                    <div className="col-md-4" key={key}>
                        <Item item={item}/>
                   </div>     
                )
            })}

        </div>
      </>
    );
  }
}

export default Itemcomtainer;
