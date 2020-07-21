class User {
  constructor(first_name, last_name,email, phone, password) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.password = password
  }

  getFirstName() {
    return this.first_name;
  }

  setFirstName(value) {
    this.first_name = value;
  }
  getLastName() {
    return this.last_name;
  }

  setFirstName(value) {
    this.last_name = value;
  }
  getEmail() {
    return this.email;
  }

  setEmail(value) {
    this.email = value;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(value) {
    this.phone = value;
  }

  User.prototype.toString() {
      return this.getLastName() +", " + this.getFirstName() +", "  + this.getPhone();
  }

}

export default User;