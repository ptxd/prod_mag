import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/home';

//All stylesheet CSS
import './scss/style.css';
import './scss/styles.css';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
    );
  }
}

export default App;

