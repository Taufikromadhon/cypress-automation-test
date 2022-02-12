/// <reference types="cypress" />

context(
  "Layout: Dapat menampilkan modal hapus activity (klik tombol hapus pada item)",
  () => {
    it("Visiting Website", () => {
      //testing 1
      // cy.visit("https://todo-devcode.web.app/");
      //testing 2
      // cy.visit("https://todo-4769a.web.app/");
      //testing 3
      cy.visit("https://ivan-todo-devrank.netlify.app/");
    });
    it("Checking the delete activity item button", () => {
      cy.get("[data-cy=activity-item-delete-button]");
    });
    it("Clicking the delete activity button", () => {
      cy.get("[data-cy=activity-item-delete-button]:first").click();
      cy.wait(3000);
    });

    it("Checking the delete confirmation modal box", () => {
      cy.get("[data-cy=todo-modal-delete]").contains(
        "Apakah anda yakin menghapus"
      );
    });
  }
);
context(
  "Fungsional: Dapat membatalkan hapus activity (klik pada tombol batal)",
  () => {
    it("Checking the delete confirmation modal box", () => {
      cy.get("[data-cy=todo-modal-delete]").contains(
        "Apakah anda yakin menghapus"
      );
    });
    it("Clicking the batal button", () => {
      cy.get("[data-cy=modal-delete-cancel-button]").click();
    });
    it("Checking the delete confirmation modal box not exist", () => {
      //   cy.get("[data-cy=todo-modal-delete]").should("not.be.visible");
      cy.get("[data-cy=todo-modal-delete]").should("not.exist");
    });
  }
);
context(
  "Fungsional: dapat membatalkan hapus activity (dengan klik di luar modal)",
  () => {
    it("Clicking the delete activity button", () => {
      cy.get("[data-cy=activity-item-delete-button]:first").click();
      cy.wait(3000);
    });
    it("Checking the delete confirmation modal box", () => {
      cy.get("[data-cy=todo-modal-delete]").contains(
        "Apakah anda yakin menghapus"
      );
    });
    it("Clicking outside modal area", () => {
      cy.get("body").click(0, 0);
    });
    it("Checking the delete confirmation modal box not exist", () => {
      //   cy.get("[data-cy=todo-modal-delete]").should("not.be.visible");
      cy.get("[data-cy=todo-modal-delete]").should("not.exist");
    });
  }
);
context("Fungsional-Integrasi API: dapat menghapus activity", () => {
  it("Clicking the delete activity button", () => {
    cy.get("[id]:last").as("beforeDelete");
    cy.get("[data-cy=activity-item-delete-button]:first").click();
    cy.wait(3000);
  });
  it("Checking the delete confirmation modal box", () => {
    cy.get("[data-cy=todo-modal-delete]").contains(
      "Apakah anda yakin menghapus"
    );
  });
  it("Clicking the Hapus button", () => {
    cy.get("[data-cy=modal-delete-confirm-button]").click();
  });
 
  it("Intercept API: DELETE Activity Item", () => {
    cy.intercept({
      method: "DELETE",
      url: "https://todo.api.devcode.gethired.id/activity-groups/:id",
    });
  });
  it("Data Berhasil Dihapus", () => {
    cy.get("[data-cy=modal-information-title]").contains(
      "Activity berhasil dihapus"
    );
  });
});

// context(
//   "Fungsional: dapat membatalkan hapus activity (dengan klik di luar modal)",
//   () => {
//     it("Intercept API: Post Activity Item", () => {
//       cy.intercept(
//         "POST",
//         "https://todo.api.devcode.gethired.id/activity-groups",
//         {
//           statusCode: 201,
//           body: {
//             message: "It worked!",
//           },
//         }
//       );
//     });
//     it("Checking the activity item title", () => {
//       // https://on.cypress.io/title
//       cy.get("[data-cy=activity-item-title]").contains("New Activity");
//     });
//     it("Checking the activity item date", () => {
//       // https://on.cypress.io/title
//       cy.get("[data-cy=activity-item-date]");
//     });
//     it("Checking all item activity", () => {
//       // https://on.cypress.io/title
//       cy.get("[data-cy=activity-item]");
//     });
//   }
// );
