import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/main.css';


class Input extends React.Component {
  update(event) {
    const newValue = event.target.value;
    this.props.updateValue(newValue);
  }
  render() {
    return (<textarea rows= "22"  className={styles.inputContainer} value = {this.props.value} onChange = {this.update.bind(this)}></textarea>);
  }
}


export default Input;