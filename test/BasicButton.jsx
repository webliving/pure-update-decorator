
import React from 'react';
import reactMixin from 'react-mixin';

import pureUpdate from '../src/index.jsx';


class BasicButton extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'html';
  }

  state = {
  };

  componentWillUpdate() {

  }

  componentDidUpdate(prevProps,prevState) {


    /*this.setState({
      renderCount: ++prevState.renderCount
    });*/

  }

  /*shouldComponentUpdate() {
    console.log('不需渲染', this.props);
    console.log('不需渲染 state', this.state);
    return true;
  }
*/
  render() {
    let {handleCount} = this.props;
    handleCount ? handleCount() : null;
    return (
      <div>

      </div>
    )
  }
}

@reactMixin.decorate(pureUpdate)
class BasicPureButton extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
  };

  componentWillUpdate() {

  }

  componentDidUpdate(prevProps,prevState) {

  }

  render() {

    this.props.handleCount();
    return (
      <div>

      </div>
    )
  }
}

export {
  BasicButton,
  BasicPureButton
} ;