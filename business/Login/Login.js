import postData from '../postData.js'


class Login {
  constructor() {
    this.email = "";
    this.password = "";
    this.access_token = ;
    this.isLoggedIn = False;
  }

  Login(email, password, url) {
    this.email = email;
    this.password = password;
    post.Data.postData(url, 
        { username: this.username, password: this.passwor  })
        .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
  }

  getCredentials() {
    return this.access_token;
  }

  setCredentials(value) {
    this.access_token = { };
  }

  signOut() {
    this.email = "";
    this.password = "";
    this.access_token = {};
    this.isLoggedIn = False;
  }

}
