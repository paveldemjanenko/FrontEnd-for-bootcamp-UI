// import axios from "axios";
// import { success, error } from "react-notification-system-redux";

// const logoutUser = user => dispatch => {
//   axios
//     .post("/api/v1/auth/session", user)
//     .then(response => {
//       if (response && response.status === 200) {
        
//         const { token } = response.data.payload;
//         localStorage.clearItem('user', token); //Use storage  to safe password
      
//         dispatch({
//           type:'LOGOUT_SUCCESS',
//           payload: { token } //set token as object by {}, default it is string
//         });

//         dispatch(
//           success({
//             title: "Logout success",
//             message: "Logout success",
//             position: "tr",
//             autoDismiss: 5
//           })
//         );
//       }
//     })
//     .catch(err => {
//       dispatch(
//         error({
//           title: "Auth failed, check email or password.",
//           message: err.response.data.error,
//           position: "tc"
//         })
//       );
//     });
// };

// export { logoutUser };
