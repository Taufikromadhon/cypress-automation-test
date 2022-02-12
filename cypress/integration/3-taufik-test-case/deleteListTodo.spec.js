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
context(
  "Layout: Dapat menampilkan modal hapus todo (klik button hapus pada item)",
  () => {
    it("Render Button Hapus", () => {
      cy.get("[data-cy=todo-item-delete-button]").should("exist");
    });
    it("Click Button Hapus", () => {
      cy.get("[data-cy=todo-item-delete-button]").eq(0).click();
      cy.wait(2000);
    });
    it("Render Button Hapus", () => {
      cy.get("[data-cy=todo-modal-delete]").should("exist");
    });
  }
);

context("Fungsional-Integrasi API: Dapat menghapus todo", () => {
  it("Render Button Hapus", () => {
    cy.get("[data-cy=todo-modal-delete]").should("exist");
    cy.wait(2000);
  });
  it("Click Button Hapus", () => {
    cy.get("[data-cy=modal-delete-confirm-button]").click();
  });
  it("Intercept API: DELETE Activity Item", () => {
    cy.intercept({
      method: "DELETE",
      url: "https://todo.api.devcode.gethired.id/todo-items/:id",
    });
  });
  it("Render Button Hapus", () => {
    cy.get("[data-cy=todo-modal-delete]").should("exist");
  });
});
