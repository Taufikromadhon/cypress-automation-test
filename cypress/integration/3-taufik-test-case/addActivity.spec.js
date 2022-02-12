/// <reference types="cypress" />

context("Functional Add Activity", () => {
  it("Visiting Website", () => {
    //testing 1
    // cy.visit("https://todo-devcode.web.app/");
    //testing 2
    // cy.visit("https://todo-4769a.web.app/");
    //testing 3
    cy.visit("https://ivan-todo-devrank.netlify.app/");
  });
  it("Clicking the activity add button", () => {
    cy.get("[data-cy=activity-add-button]").click();
  });

  it("Intercept API: POST Activity Item", () => {
    cy.intercept({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/activity-groups",
    });
  });
});
context("Menampilkan Layout Activity Item Title", () => {
  it("Checking the activity item title", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=activity-item-title]").contains("New Activity");
  });
});
context("Menampilkan Layout Activity Item Date", () => {
  it("Checking the activity item date", () => {
    // https://on.cypress.io/title
    cy.get("[data-cy=activity-item-date]");
  });
});
