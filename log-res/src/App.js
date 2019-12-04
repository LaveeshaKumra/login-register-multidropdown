import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponents';
//import axios from 'axios';

import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <ul>
        <li className="list-item"><Link to={'/login'} className="link">Login</Link></li>
        <li className="list-item"><Link to={'/register'} className="link">Register</Link></li>

      </ul>
      
        <Switch>
          <Route extact path="/login" component={LoginComponent}></Route>
          <Route exact path="/register" component={RegisterComponent}></Route>
        </Switch>

    </div>
    </Router>
  );
}
}
export default App;
