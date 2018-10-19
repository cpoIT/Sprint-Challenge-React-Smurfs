import React, { Component } from 'react';
import axios from '../../node_modules/axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height};
    console.log(smurf)
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log('POST RESPONSE:', response)
      this.setState({
        smurfs: response.data,
        name: '',
        age: '',
        height: ''
      });
      // this.setState({ smurfs: response.data, name: ''})
    })
    .catch(error => console.log(error))
    // add code to create the smurf using the api


  }

  // let smurfs = [
  //   {
  //     id: 0,
  //     name: 'Brainey Smurf',
  //     age: 200,
  //     height: '8cm'
  //   }
  // ];
  // server.get('/smurfs', (req, res) => {
  //   res.json(smurfs);
  // });
  // let smurfId = 1;
  
  // server.post('/smurfs', (req, res) => {
  //   const { name, age, height } = req.body;
  //   const newSmurf = { name, age, height, id: smurfId };
  //   if (!name || !age || !height) {
  //     return sendUserError(
  //       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
  //       res
  //     );
  //   }
  //   const findSmurfByName = smurf => {
  //     return smurf.name === name;
  //   };
  //   if (smurfs.find(findSmurfByName)) {
  //     return sendUserError(
  //       `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
  //       res
  //     );
  //   }
  
  //   smurfs.push(newSmurf);
  //   smurfId++;
  //   res.json(smurfs);
  // });

// ```js
// {
//   name: 'Sleepy',
//   age: 323,
//   height: '5cm'
// }
// ```

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
