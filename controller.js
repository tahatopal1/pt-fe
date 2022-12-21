import loginService from "./login-service";

export const controller = function (page) {
  switch (page) {
    case "Login":
      loginService.prepareSection();
      break;
    case "Signup":
    default:
      break;
  }
};

controller("Login");
