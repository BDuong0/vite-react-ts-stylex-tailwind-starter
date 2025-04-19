import Test_Component from "../../src/Test_Component";

describe("Test-Component.cy.jsx", () => {
  it("playground", () => {
    // cy.mount()
  });

  cy.mount(<Test_Component />);

  cy.get('[data-cy="test-component"]').as("test-component");

  // Additional automatic more comprehensive accessibility test to make sure my components are accessible
  it("should run accessibility audits", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
