/// <reference types="cypress" />

context("Menambahkan beberapa item todo", () => {
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
  it("Clicking the todo add button", () => {
    cy.get("[data-cy=todo-add-button]").click();
  });
  it("Rendering Modal Tambah Item", () => {
    cy.get("[data-cy=modal-add-title]").should("exist");
  });
});
context("Fungsional: Dapat memasukkan nama item", () => {
  it("Creating Input Automatically", () => {
    return Cypress.Promise.delay(1000).then(() => {
      return cy
        .get("[data-cy=modal-add-name-input]")
        .click()
        .focused()
        .clear()
        .type("Exploring Cypress");
    });
  });
  it("Creating Input Automatically", () => {
    cy.get("[data-cy=modal-add-title]").click(0, 0);
  });
});
context(
  "Fungsional: Dapat mengubah priority (klik pada dropdown priority dan pilih item index [1])",
  () => {
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
  }
);

context("Fungsional-Integrasi API: Dapat menambahkan data baru", () => {
  it("Saving Input with automation method", () => {
    cy.get("[data-cy=modal-add-save-button]").click();
  });
  it("Intercept API: POST Activity Item", () => {
    cy.intercept({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/todo-items",
    });
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
context(
  "Fungsional: Dapat mengubah priority (klik pada dropdown priority dan pilih item index [2])",
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
          .type("{downarrow}")
          .type("{enter}");
      });
    });
    it("Creating Input Automatically", () => {
      cy.get("[data-cy=modal-add-title]").click(0, 0);
    });
    it("Rendering Automated Input Priority Medium", () => {
      cy.wait(2000);
      cy.get("[data-cy=modal-add-priority-item]").contains("Medium");
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
context(
  "Fungsional: Dapat mengubah priority (klik pada dropdown priority dan pilih item index [4])",
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
          .type("");
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
          .type("{downarrow}")
          .type("{downarrow}")
          .type("{downarrow}")
          .type("{enter}");
      });
    });
    it("Creating Input Automatically", () => {
      cy.get("[data-cy=modal-add-title]").click(0, 0);
    });
    it("Rendering Automated Input Priority Very Low", () => {
      cy.wait(2000);
      cy.get("[data-cy=modal-add-priority-item]").contains("Very Low");
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
