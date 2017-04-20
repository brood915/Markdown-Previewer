import React from 'react';
import PropTypes from 'prop-types';

class InputContainer extends React.Component {
  update(event) {
    const newValue = event.target.value;
    this.props.updateValue(newValue);
  }
  render() {
    return (<textarea rows= "22"  className="inputContainer" value = {this.props.value} onChange = {this.update.bind(this)}></textarea>);
  }
}

Input.propTypes = {
	value: Proptypes.string.isRequired;
	updateValue: Proptypes.func.isrequired;
}

export default Input;