import { connect } from "react-redux";
import Comments from "./Comments";
import { getCommentsByContentId } from "./Comments.Action";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { getCommentsByContentId }
)(Comments);
