import axios from "axios";
import Connection from "../services/connection.json"

class UserService {

  // TODO: Function for get user credentials and display result of login
  login(username, password) {
    return axios.post(Connection.userAuthenticationAddress + "sign-in", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          //localStorage.setItem("userType", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // TODO: Function for registering user
  register(username, contactNo, email, password, userType) {
    return axios.post(Connection.userAuthenticationAddress + "sign-up", {
      username,
      contactNo,
      email,
      password,
      userType
    });
  }

  // TODO: Function for logout from system
  logout() {
    localStorage.removeItem("user");
    //localStorage.removeItem("userType");
  }

  // TODO: Function for get current user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // getCurrentUserType(){
  //   return JSON.parse(localStorage.getItem("userType"));
  // }
}

export default new UserService();
