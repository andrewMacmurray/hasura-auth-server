import * as Users from "./users/users";
import * as Response from "./response";

export const handler = async event => {
  const user: Users.SignupDetails = JSON.parse(event.body);

  return Users.signup(user)
    .then(Response.ok)
    .catch(Response.error);
};
