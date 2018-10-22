import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      smurf: ""
    }
  }

  deleteSmurf = id => {
    console.log(id)
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log("DELETE RESPONSE:", response)
        this.setState({ smurfs: response.data, smurf: "" })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.number.isReqquired
  }))
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;


                {/* smurfs={this.state.smurfs}
                handleSetData={this.handleSetData} */}