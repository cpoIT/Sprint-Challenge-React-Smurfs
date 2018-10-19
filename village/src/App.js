import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const targets = ['smurf-form', ''];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log('GET RESPONSE:', response);
        this.setState({ smurfs: response.data})
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          {targets.map(target => (
            <NavLink key={target} to={`/${target}`}>Smurfy {target}
            </NavLink>
          ))}
        <Route path = '/smurf-form' render={props => <SmurfForm {...props} />} />
        <Route exact path = '/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        </nav>
      </div>
    );
  }
}

export default App;

