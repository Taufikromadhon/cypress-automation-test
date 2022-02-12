/// <reference types="cypress" />

context(
  "Routing: Dapat membuka halaman detail activity (klik pada item activity)",
  () => {
    it("Visiting Website", () => {
      //testing 1
      // cy.visit("https://todo-devcode.web.app/");
      //testing 2
      // cy.visit("https://todo-4769a.web.app/");
      //testing 3
      cy.visit("https://ivan-todo-devrank.netlify.app/");
    });
    it("Checking Activity Item", () => {
      // https://on.cypress.io/title
      cy.get("[data-cy=activity-item]").should("exist");
    });
    it("Intercept API: GET Activity Item", () => {
      cy.intercept({
        method: "GET",
        url: "https://todo.api.devcode.gethired.id/todo-items?activity_group_id=4",
      });
    });
    it("Clicking the activity item button", () => {
      cy.get("[data-cy=activity-item]:first").click();
    });
    it("Checking Navigated or Not Navigated", () => {
        cy.get("[data-cy=activity-title]").should("not.exist");
      });

  }
);

context("Layout-Integrasi API: Dapat menampilkan title todo (sesuai response API)", () => {
    it("Checking Todo Title", () => {
        // https://on.cypress.io/title
        cy.get("[data-cy=todo-title]").contains("New Activity");
      });
});
context("Layout: Dapat menampilkan button tambah", () => {
    it("Checking the tambah button", () => {
        // https://on.cypress.io/title
        cy.get("[data-cy=todo-add-button]").should("exist");
      });
});
context("Layout: Dapat menampilkan item list atau empty state", () => {
    it("Checking the empty state", () => {
        // https://on.cypress.io/title
        cy.get("[data-cy=todo-empty-state]").should("exist");
      });
});