import {is} from 'immutable';

export default {

  shouldComponentUpdate(nextProps, nextState) {

    const thisProps = this.props ? this.props
      : /* istanbul ignore next */ {};

    const thisState = this.state ? this.state
      : /* istanbul ignore next */ {};

    // 判断是否值不相同 || 如果引用相同比较值是否全相同
    for (const key in nextProps) {
      // console.log(11111, !is(thisProps[key], nextProps[key]));
      /* istanbul ignore else  */
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    // 判断是否值不相同 || 如果引用相同比较值是否全相同
    for (const key in nextState) {
      /* istanbul ignore else  */
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }

    return Object.keys(thisProps).length !== Object.keys(nextProps).length || /* istanbul ignore next */ Object.keys(thisState).length !== Object.keys(nextState).length;


  }
};