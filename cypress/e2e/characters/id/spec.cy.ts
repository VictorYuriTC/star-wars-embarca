describe("Test chraracter details page", () => {
  it("should render character name correctly", () => {
    cy.visit("http://localhost:3000/characters/1");

    cy.get("h1").should("contain", "Luke Skywalker");
  });

  it("should not render any character name for invalid ids", () => {
    cy.visit("http://localhost:3000/characters/asdas", {
      failOnStatusCode: false,
    });

    cy.get("h1").should("not.contain", "R2-D2");
  });
});
