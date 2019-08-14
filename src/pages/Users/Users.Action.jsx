import axios from "axios";
import { success, error } from "react-notification-system-redux";

const seeUsers = user => dispatch => {
  axios
    .get("/api/v1/auth/users", user)
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type:'USERS_LIST',
          payload: {}
        })
        dispatch(
          success({
            title: "Users found",
            message: "User list provided",
            position: "tr",
            autoDismiss: 5
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Users not found",
          message: err.response.data.error,
          position: "tc"
        })
      );
    });
};

export { seeUsers };
