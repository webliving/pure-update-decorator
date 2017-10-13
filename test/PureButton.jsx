
import React from 'react';
import reactMixin from 'react-mixin';

import pureUpdate from '../src/index.jsx';

@reactMixin.decorate(pureUpdate)
class PureButton extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {

  };

  componentWillUpdate() {
    // console.log('PureButton ===');
  }

  componentWillReceiveProps(nextProps) {
    // console.log('PureButton ===');
  }

  componentDidUpdate(prevProps,prevState) {
    this.setState(this.props);
  }

  /*shouldComponentUpdate() {
    console.log('不需渲染', this.props);
    console.log('不需渲染 state', this.state);
    return true;
  }
*/
  render() {

    // console.log('state', this.state);
    // console.log('yyyy', this.props);

    // let bar = {name: 'hi'};
    // let abc = {...bar};
    // let name = 'ok';
    // let obj = { [name]: 'JavaScript' };

    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default PureButton;