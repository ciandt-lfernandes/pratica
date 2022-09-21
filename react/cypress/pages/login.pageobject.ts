export const login = (user) => {
  cy.visit("/");

  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#signin").click();
};
export const logout = () => {
  cy.get("#logout").click();
};
export const checkLogin = () => {
  expect(localStorage.getItem("authenticated")).to.eq("true");
};
export const checkLogout = () => {
  expect(localStorage.getItem("authenticated")).to.eq("false");
};
