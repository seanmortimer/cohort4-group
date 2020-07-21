import Login from "./Login";
import Register from "./Register";

test("should create account and return access_token", () => {
  const reg = new Register();
  let user = reg.register(
    "john",
    "doe",
    "john.doe@gmail.com",
    "403-5555-1234",
    "myPassword",
    "myPassword"
  );
  console.log(user);
});
