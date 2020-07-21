import Login from "./Login";
import Register from "./Register";

test("should create account and return access_token", () => {
  const user = new Register(
    "john",
    "doe",
    "john.doe@gmail.com",
    "myPassword",
    "myPassword"
  );
  console.log(user);
  //   const login = new Login("");
});
