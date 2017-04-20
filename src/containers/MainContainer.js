import React from 'react';
import Input from '../components/Input';


class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
  }

  updateValue(newValue) {
    this.setState({
      value: newValue
    })
  }

  markup(value) {
   const rawMarkup = marked(value, {sanitize: true});
    return {
      __html: rawMarkup
    };
  }
  render() {
    return (<div><Input value = {this.state.value} updateValue = {this.updateValue.bind(this)} />
        <div className="viewerContainer" dangerouslySetInnerHTML={this.markup(this.state.value)} /></div>);
  }
}

export default MainContainer;
