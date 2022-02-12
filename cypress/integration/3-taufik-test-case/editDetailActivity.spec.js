/// <reference types="cypress" />

context(
  "Fungsional-Integrasi API: Dapat edit title todo dan menyimpannya (klik pada title)",
  () => {
    it("Visiting Website", () => {
      //testing 1
      // cy.visit("https://todo-devcode.web.app/");
      //testing 2
      // cy.visit("https://todo-4769a.web.app/");
      //testing 3
      cy.visit("https://ivan-todo-devrank.netlify.app/");
    });
    it("Clicking the activity item button", () => {
      cy.get("[data-cy=activity-item]:first").click();
    });
    // it("Clicking the todo title, and Edit", () => {
    //   cy.get("[data-cy=todo-title]").click().clear();
    //   cy.get("[data-cy=todo-title]").trigger("click").type("Ubah Judul");
    // });
    it("Clicking the todo title, and Edit", () => {
      return Cypress.Promise.delay(1000).then(() => {
        return cy.get("[data-cy=todo-title]").click().focused().clear().type("Have Been Edited");
      });
    });
    it("Clicking outside title area", () => {
        cy.get("body").click(0, 0);
      });
      it("Intercept API: PATCH Activity Item", () => {
        cy.intercept({
          method: "PATCH",
          url: "https://todo.api.devcode.gethired.id/activity-groups/4",
        });
      });
      it("Checking Todo Title", () => {
        // https://on.cypress.io/title
        cy.get("[data-cy=todo-title]").contains("Have Been Edited");
      });
  }
  
);
