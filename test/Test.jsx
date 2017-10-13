import React from 'react';
import {connect} from 'react-redux';

import {BasicButton, BasicPureButton} from './BasicButton.jsx';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.basicUpdateNumber = 0;
  }

  state = {
  };

  render() {
    let {isPure} = this.props;
    let Button = isPure ? BasicPureButton : BasicButton;

    return (
      <div>
        <p>{this.basicUpdateNumber}</p>
        <Button handleCount={this.basicButtonUpdateCount}/>
      </div>
    )
  }

  basicButtonUpdateCount = () => {
    this.basicUpdateNumber = ++this.basicUpdateNumber;
  }
}

export default connect(function (state) {
  return {count: state}
})(Test);