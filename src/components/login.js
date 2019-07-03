import React,{Component} from 'react';
import Loginform from "./loginform";


class Login extends Component {
  constructor(props){
    super(props)


    this.getInfo = this.getInfo.bind(this)
  }

  getInfo(data){
    var fm=new FormData()
    fm.append('unm', data.username)
    fm.append('pwd',data.password)

    fetch('http://aces.com/api',{method:'post', body:fm})
   . then(Responsedata=>Responsedata.json())
   . then(actualdata=> console.log(actualdata))
    console.log(data)

  }
  render(){
  
    return (
      <>
      
      <Loginform messenger={this.getInfo} />
      </>
    )
  }
   
}

export default Login;
