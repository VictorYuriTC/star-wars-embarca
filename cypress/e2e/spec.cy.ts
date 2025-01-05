describe("Test home page on `/` page", () => {
  it("should contain a welcome message", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Welcome").should("exist");
  });

  it("should contain a button redirecting users to `/characters` page", () => {
    cy.visit("http://localhost:3000");

    cy.contains("button", "Start Journey").click();

    const SIX_SECONDS = 4000;

    cy.wait(SIX_SECONDS);

    cy.get("h1").should("contain", "Star Wars Characters");
  });
});
