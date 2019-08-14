import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
