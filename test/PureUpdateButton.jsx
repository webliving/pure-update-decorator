
import React from 'react';
import reactMixin from 'react-mixin';

import pureUpdate from '../src/index.jsx';

@reactMixin.decorate(pureUpdate)
class PureUpdateButton extends React.Component {
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

export default PureUpdateButton;