import { is } from 'immutable';

export default  {

  shouldComponentUpdate(nextProps = {}, nextState = {}) {

    const thisProps = this.props || {}, thisState = this.state || {};

    console.log('不需渲染', this.props);
    console.log('不需渲染 state', this.state);

    // 判断是否值不相同 || 如果引用相同比较值是否全相同
    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    // 判断是否值不相同 || 如果引用相同比较值是否全相同
    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||  Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }


    return false;
  }
};