import React from 'react';
import {connect} from 'react-redux';

import PureButton from './PureButton.jsx';


class TestPure extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    list: []
  };

  shouldComponentUpdate() {
    // console.log('this props 123');
    return true;
  }

  render() {

    let count = this.props.count.toJS();

    // console.log('count', count);


    let props = count.count === 2 ? {count: 1, name: 10} : (count.name ? {
      count: 1
    } : {
      count: 0
    });


    // let bar = {name: 'hi'};
    // let abc = {...bar};
    // let name = 'ok';
    // let obj = { [name]: 'JavaScript' };

    return (
      <div>
        <p>tttt</p>
        <PureButton size="small" {...props} />
      </div>
    )
  }

}

export default connect(function (state) {
  return {count: state}
})(TestPure);