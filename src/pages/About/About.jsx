import React, { Component } from "react";
import forest from '../../images/forest.jpg';

class About extends Component {

  render() {
    return (
      <div>
          <h1>About this App</h1>
          <p>
              This <b>app</b> is made for <i>people</i> who like bla bla bla. And come more bla bla bla. Just enjoy it!
          </p>
          <img src={forest} alt="Forest" width="100%" height="100%"/>
      </div>
    );
  }
}

export default About;
