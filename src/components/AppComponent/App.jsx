import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../../pages/Home";
import Registration from "../../pages/Registration";
import About from "../../pages/About";
// import Users from "../../pages/Users/";
import User from "../../pages/User/";
import Post from "../../pages/Post/";
import Login from "../../pages/Login";
// import Logout from './pages/Logout';
import NotificationSystem from "../NotificationComponent";
import Navigation from '../Navigation';
import PrivateRoute from '../PrivateRoute';

const App = ({ user, logout }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} logout={logout}/>
        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/posts/:postId' component={Post} />
          {/* <Route path='/users/' component={User} /> */}
          <Route path='/users/self' component={User} />
          {/* <Route path='/logout' component={Logout} /> */}
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
