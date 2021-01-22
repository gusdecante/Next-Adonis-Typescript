import { AuthController } from "@template/backend";
import { RouteObject } from "../routeObject";

export const user = {
  me: new RouteObject<{}, AuthController["me"]>(
    "get",
    "/auth/me",
    "AuthController.me"
  ),
  signup: new RouteObject<
    { email: string; password: string },
    AuthController["signup"]
  >("post", "/auth/signup", "AuthController.signup"),
  login: new RouteObject<
    { email: string; password: string },
    AuthController["login"]
  >("post", "/auth/login", "AuthController.login"),
};
