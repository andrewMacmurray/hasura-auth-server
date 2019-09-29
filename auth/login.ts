import * as Users from "./users/users";
import * as Response from "./response";

export const handler = async event => {
  const user: Users.LoginDetails = JSON.parse(event.body);

  return Users.login(user)
    .then(Response.ok)
    .catch(Response.error);
};
