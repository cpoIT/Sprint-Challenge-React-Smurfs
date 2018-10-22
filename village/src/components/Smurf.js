import React from 'react';
import PropTypes from 'prop-types';



const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button>Not Smurfy</button>
    </div>
  );
};

Smurf.propTypes = {
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

Smurf.defaultProps = {
  name: '',
  height: '',
  id: '',
  age: '',
  key: ''
};

export default Smurf;

