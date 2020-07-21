import postData from "../postData.js";
import User from "../User.js";
class Register {
  register(first_name, last_name, email, phone, password, retype_password) {
    let user;
    try {
      if (password != retype_password) {
        throw "passwords don't match";
      }
      return new User(first_name, last_name, email, phone, password);
    } catch (e) {
      throw e.message;
    }
  }
}
export default Register;
