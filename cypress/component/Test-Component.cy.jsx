describe("Test-Component.cy.jsx", () => {
  it("playground", () => {
    // cy.mount()
  });

  // Additional automatic more comprehensive accessibility test to make sure my components are accessible
  it("should run accessibility audits", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
