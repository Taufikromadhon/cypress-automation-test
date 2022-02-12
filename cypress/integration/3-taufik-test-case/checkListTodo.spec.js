/// <reference types="cypress" />

context("Layout: Dapat menampilkan list sort", () => {
  it("Visiting Website", () => {
    //testing 1
    // cy.visit("https://todo-devcode.web.app/");
    //testing 2
    // cy.visit("https://todo-4769a.web.app/");
    //testing 3
    cy.visit("https://ivan-todo-devrank.netlify.app/");
  });
  it("Clicking the activity item", () => {
    cy.get("[data-cy=activity-item-title]:first").click();
    cy.wait(3000);
  });
  it("Rendering the todo sort button", () => {
    cy.wait(3000);
    cy.get("[data-cy=todo-sort-button]").should("exist");
  });
});
context(
  "Fungsional: Dapat memasukkan nama item (dengan input yang panjang)",
  () => {
    it("Rendering todo add button", () => {
      cy.get("[data-cy=todo-add-button]").should("exist");
      cy.wait(1000);
    });
    it("Clicking the todo add button", () => {
      cy.wait(1000);
      cy.get("[data-cy=todo-add-button]").click();
    });
    it("Creating Input Automatically", () => {
      return Cypress.Promise.delay(1000).then(() => {
        return cy
          .get("[data-cy=modal-add-name-input]")
          .click()
          .focused()
          .clear()
          .type("Exploring Cypress With Great Internet Access");
      });
    });
    it("Creating Input Automatically", () => {
      cy.get("[data-cy=modal-add-title]").click(0, 0);
    });
    it("Creating Input Automatically", () => {
      return Cypress.Promise.delay(1000).then(() => {
        return cy
          .get("[data-cy=modal-add-priority-dropdown]")
          .click()
          .focused()
          .type("{downarrow}")
          .type("{enter}");
      });
    });
    it("Creating Input Automatically", () => {
      cy.get("[data-cy=modal-add-title]").click(0, 0);
    });
    it("Rendering Automated Input Priority High", () => {
      cy.wait(2000);
      cy.get("[data-cy=modal-add-priority-item]").contains("High");
    });
    it("Saving Input with automation method", () => {
      cy.get("[data-cy=modal-add-save-button]").click();
    });
    it("Intercept API: POST Activity Item", () => {
      cy.intercept({
        method: "POST",
        url: "https://todo.api.devcode.gethired.id/todo-items",
      });
    });
  }
);
context("Checking", () => {
    it("Checking", () => {
      cy.get("[data-cy=todo-item]").should("exist");
      cy.wait(2000);
    });
  });
context("Fungsional-Integrasi API: Dapat mengubah status item todo (klik checkbox pada item pertama)", () => {
  it("Rendering item todo", () => {
    cy.get("[data-cy=todo-item]").should("exist");
    cy.wait(2000);
  });
  it("Click checkbox pada item todo", () => {
    cy.get("[data-cy=todo-item-checkbox").eq(0).not('[disabled]')
      .check().should('be.checked')
  });
  it("Intercept API: PATCH Activity Item", () => {
    cy.intercept({
      method: "PATCH",
      url: "https://todo.api.devcode.gethired.id/todo-items/:id",
    });
  });
});
context("Checking", () => {
  it("Checking", () => {
    cy.get("[data-cy=todo-item]").should("exist");
    cy.wait(2000);
  });
});
context("Fungsional: Dapat menampilkan sort terlama", () => {
    it("Sorting Data Set Automatically", () => {
      cy.get("[data-cy=todo-sort-button]").click();
      cy.wait(2000);
      cy.get("[data-cy=false]").eq(3).click();
    });
  });
