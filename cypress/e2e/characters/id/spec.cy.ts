import { getCapitalizedString } from "../../../../src/utils/strings";

const WICKET_SYSTRI_WARRICK_DETAILS: Record<string, string> = {
  height: "88",
  mass: "20",
  hair_color: "brown",
  skin_color: "brown",
  eye_color: "brown",
  birth_year: "8BBY",
  gender: "male",
};

describe("Test character details page on /characters/[id]", () => {
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

  it("should render all character details when endpoint returns no falsy/void values", () => {
    cy.visit("http://localhost:3000/characters/30");

    cy.get("h1").should("contain", "Wicket Systri Warrick");

    Object.values(WICKET_SYSTRI_WARRICK_DETAILS).forEach((characterDetail) => {
      const formattedCharacterDetail =
        getCapitalizedString(characterDetail) ?? "";

      cy.contains(formattedCharacterDetail).should("exist");
    });
  });
});
