import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import createStore from './createStore';
import scss from './sass/index.scss';

import './test.js';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const store = createStore;

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>          
      <Component scss={scss}/>          
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App/App').default;
    render(NextApp);
  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// Number.prototype.fizzbuzz = function(){
//   [...new Array(this)]
//   .forEach((el, idx) => 
//     !((idx + 1) % 3) && !((idx + 1) % 5) ? console.log("fizzbuzz") : 
//     !((idx + 1) % 3) ? console.log("fizz") :
//     !((idx + 1) % 5) ? console.log("buzz") : console.log((idx + 1))  
//     )
//   return;
// }
// const any = 22;
// Number(any).fizzbuzz();

// String.prototype.isPolindrom = function () {
  
//   const arr = this.split('');
//   const length = arr.length;
//   for(let i = 0; i <= Math.floor(length/2); i += 1){  
//     const res = arr.pop() === arr.shift();
//     if(arr.length <= 1) return true;
//     if(!res) return res;
//   }
// }

// console.log('"druhurd".isPolindrom() :>> ', "3druh22hurd3".isPolindrom());