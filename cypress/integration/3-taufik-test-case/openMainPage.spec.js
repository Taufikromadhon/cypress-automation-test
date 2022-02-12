/// <reference types="cypress" />

context("Open-Main-Page", () => {
  beforeEach(() => {
    //testing 1
    // cy.visit("https://todo-devcode.web.app/");
    //testing 2
    // cy.visit("https://todo-4769a.web.app/");
    //testing 3
    cy.visit("https://ivan-todo-devrank.netlify.app/");
  });
  it("Doing GET API Intercept", () => {
    cy.intercept("GET", "https://todo.api.devcode.gethired.id/activity-groups");
  });
  it("Checking the header title", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=header-title]").contains("TO DO LIST APP");
  });
  it("Checking the header activity", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=activity-title]").contains("Activity");
  });
  it("Checking the activity add button", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=activity-add-button]").contains("Tambah");
  });
  it("Checking all item activity", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=activity-item]");
  });
});
