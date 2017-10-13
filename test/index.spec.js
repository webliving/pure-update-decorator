import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// ==========================
let expect = require('chai').expect;

// let index = require('./build/index');
// let Test = require('./build/test');

import Test from './Test.jsx';
import TestPure from './TestPure.jsx';

import {BasicButton} from './BasicButton.jsx';

// console.log('index', index);

// console.log('test', <Test />);



describe('子组件渲染优化:', function () {
  let add = 'ADD';
  let store = createStore(function (state = Immutable.fromJS({}), action) {
    switch (action.type) {
      case add:
        return state.update('count', function (count) {
          return ++count;
        });

        break;

      default:
        return state;
    }
  }, Immutable.fromJS({count: 0}));

  it('渲染次数为: 3', function () {


    let abc = <BasicButton test={{bar: 200}} />;

    let testCom = ReactDom.render((
      <BasicButton test={{bar: 200}} />
    ), document.body);

    console.log('abc', abc.constructor === BasicButton); // false

    // console.log('BasicButton constructor:', typeof BasicButton.constructor);
    // console.log('BasicButton instanceof:', BasicButton instanceof Function); // true


    // console.log('testCom title:', testCom.title);
    // console.log('testCom constructor', testCom.constructor);
    // console.log('testCom instanceof:', testCom instanceof BasicButton); // true

    ReactDom.unmountComponentAtNode(document.body);



    let re = ReactDom.render((
      <Provider store={store}>
        <Test />
      </Provider>
    ), document.body);

    console.log('testCom', re.props.children);

    // console.log('re', ReactDom.findDOMNode(re).childNodes[1]);

    store.dispatch({
      type: add
    });


    store.dispatch({
      type: add
    });

    store.dispatch({
      type: add
    });

    let count = ReactDom.findDOMNode(re).children[0].innerHTML;
    expect(count).to.be.equal('3');
    ReactDom.unmountComponentAtNode(document.body);

  });

  it('渲染次数为: 1', function () {
    let re = ReactDom.render((
      <Provider store={store}>
        <Test isPure={true} />
      </Provider>
    ), document.body);
    store.dispatch({
      type: add
    });


    store.dispatch({
      type: add
    });

    store.dispatch({
      type: add
    });

    let count = ReactDom.findDOMNode(re).children[0].innerHTML;
    expect(count).to.be.equal('1');
    ReactDom.unmountComponentAtNode(document.body);

  });

});


describe('数据更新比较', function () {

  let add = 'ADD';
  let remove = 'REMOVE';

  let store = createStore(function (state = Immutable.fromJS({}), action) {
    switch (action.type) {
      case add:
        return state.update('name', function (name) {
          return 10;
        });

        break;

      case remove:
        return state.update('count', function (count) {
          return ++count;
        });

        break;

      default:
        return state;
    }
  }, Immutable.fromJS({count: 0}));

  it('te', function () {
    let re = ReactDom.render((
      <Provider store={store}>
        <TestPure test={{bar: 200}}/>
      </Provider>
    ), document.body);

    // console.log('re', ReactDom.findDOMNode(re).children[1].innerHTML);
    // console.log('re', ReactDom.findDOMNode(re).childNodes[1]);

    store.dispatch({
      type: add
    });


    store.dispatch({
      type: remove
    });

    store.dispatch({
      type: remove
    });

    // console.log('999', ReactDom.findDOMNode(re).children[1].innerHTML);

  });
});


/*setTimeout(() => {
  console.log('setTimeout');
  store.dispatch({
    type: add
  });
}, 3000);*/


// console.log('store', store.getState().toJS());
