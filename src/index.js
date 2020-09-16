import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import createStore from './createStore';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const store = createStore;
console.log('store :>> ', store);

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>          
      <Component />          
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