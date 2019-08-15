import axios from "axios";

const getComment = ({ token }) => dispatch => {
  axios
    .get("/api/v1/media/{{contentId}}/comments/", {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_COMMENT",
          payload
        });
      }
    });
};

export { getComment };