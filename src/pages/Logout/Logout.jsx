// import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'; 

// class Logout extends Component {

//   onSubmit = event => {
//     event.preventDefault();
//     for (const key in this.state) {
//       if (this.state[key].length < 1) {
//         console.log("All fields required");
//         return false;
//       }
//     }
//     this.props.logoutUser(this.state);
//   };

//   render() {
//     const { user } = this.props;

//     if (user.token) {
      
//       return <Redirect to='/login' />;
//     }

//     return (
//       <form onSubmit={this.onSubmit} className='col-6 ml-auto mr-auto'>
//         <button type='submit' className='btn btn-success float-right mt-3'>
//           Logout
//         </button>
//       </form>
//     );
//   }
// }

// export default Logout;
