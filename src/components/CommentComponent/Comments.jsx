import React, { Component } from "react";

class Comments extends Component {
  componentDidMount() {
    this.props.getCommentsByContentId(
        this.props.user, 
        this.props.contentId
        );
  }

  render() {
    return (
      <div>
          <ul>
              <li>
                  comments
              </li>
          </ul>
      </div>
    );
  }
}

export default Comments;