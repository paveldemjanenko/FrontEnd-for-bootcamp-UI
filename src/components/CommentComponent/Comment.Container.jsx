import { connect } from "react-redux";
import Posts from "./Posts";
import { getComment } from "./Comment.Action";

const stateToProps = state => {
  return {
    user: state.user,
    posts: state.getPostsList
  };
};

export default connect(
  stateToProps,
  { getComment }
)(Posts);
