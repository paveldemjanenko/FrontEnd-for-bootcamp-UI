import React, { Component, Fragment } from "react";
import Comments from '../../components/CommentComponent';

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(
      this.props.user, 
      this.props.match.params.postId
      );
  }

  render() {
    const { postId } = this.props.match.params;
    return (
      <Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
          
        </div>
        {/* <div>{this.props.post._id}</div> */}
        <Comments contentId={postId} />
      </Fragment>
    );
  }
}

export default Post;
