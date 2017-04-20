import React from 'react';
import Input from '../components/Input';
import styles from '../style/main.scss';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	}
	}
	render() {
		return(<div className = {styles.test}><Input /></div>);

	}
}

export default MainContainer;
