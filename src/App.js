import React,{Component} from 'react';
import {Switch,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './components/login'


class App extends Component {




  render(){
  
    return (
      <>
      <Switch>
      <Route exact path='/' component={Login} />
      </Switch>
      </>
    )
  }
   
}

export default App;
