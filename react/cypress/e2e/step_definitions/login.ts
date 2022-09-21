import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  checkLogin,
  checkLogout,
  login,
  logout,
} from "../../pages/login.pageobject";

let user;

Given("a valid user", () => {
  user = {
    email: "joel@email.com",
    password: "1234",
  };
});
When("a user login", () => {
  login(user);
});
When("a user logout", () => {
  logout();
});
Then("a user login successfully", () => {
  checkLogin();
});
Then("a user logout successfully", () => {
  checkLogout();
});
