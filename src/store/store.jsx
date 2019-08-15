import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/";
// import axios fromm 'axios';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const savedUser = localStorage.getItem('user');

if (savedUser) {
    store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { token: savedUser }
    });
}

export default store;
