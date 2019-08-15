import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from './registration';
import getPostsList from './getPostsList';
import getPostList from './getPostList';
import getComments from './getComments';
import user from './user';


const rootReducer = combineReducers({ 
    notifications, 
    isRegistered, 
    user,
    getPostsList,
    getPostList,
    getComments
});

export default rootReducer;
