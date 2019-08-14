import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/";
import Registration from "./pages/Registration/";
import About from "./pages/About/";
import Users from "./pages/Users/";
import Login from "./pages/Login/";
// import Logout from './pages/Logout';
import NotificationSystem from "./components/NotificationComponent";
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/posts/:postId' component={() => {}} />
          <Route path='/users/' component={Users} />
          <Route path='/users/self' component={() => {}} />
          {/* <Route path='/logout' component={Logout} /> */}
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
