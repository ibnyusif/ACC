import React,{Component} from 'react';


class Loginform extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            error:''

        }

        // console.log(this.props.messenger)
        this.myonChange=this.myonChange.bind(this)
        this.send= this.send.bind(this)

    }
    myonChange(e){
        // console.log(e.target.name)
        this.setState({[e.target.name]:e.target.value})

    }
    send(){
      if(this.state.username=='' || this.state.password==''){
        this.setState({error:'please enter username and password'})
      } else {
        this.props.messenger(this.state)
      }
        
        // console.log(this.state);
        
    }
  render(){
//   console.log (this.state)
    return (
      <>  
      <h4>{this.state.error}</h4>
    <input type="text" name='username' placeholder='username' onChange={this.myonChange}/>
    <input type="password" name='password' placeholder='Password'onChange={this.myonChange}/>
    <button onClick={this.send}>Login</button>
      </>
    
    )
  }
   
}

export default Loginform;
