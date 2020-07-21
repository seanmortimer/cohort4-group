import postData from "../postData.js";
import User from "../User.js.js";
class Register {
  register(first_name, last_name, email, password, retype_password) {
    let user;
    try {
      if (password != retype_password) {
      }
      return new User(first_name, last_name, email, phone, password);
    } catch (e) {
      throw new Error("passwords don't match");
    }
  }
}
export default Register;
