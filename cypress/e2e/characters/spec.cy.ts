const CHARACTERS_PAGE_TWO_URL = "http://localhost:3000/characters?page=2";

const ALL_CHARACTERS_FOUND_ON_PAGE_TWO: {
  id: number;
  name: string;
}[] = [
  {
    id: 11,
    name: "Anakin Skywalker",
  },

  {
    id: 12,
    name: "Wilhuff Tarkin",
  },

  {
    id: 13,
    name: "Chewbacca",
  },

  {
    id: 14,
    name: "Han Solo",
  },

  {
    id: 15,
    name: "Greedo",
  },

  {
    id: 16,
    name: "Jabba Desilijic Tiure",
  },

  {
    id: 18,
    name: "Wedge Antilles",
  },

  {
    id: 19,
    name: "Jek Tono Porkins",
  },

  {
    id: 20,
    name: "Yoda",
  },

  {
    id: 21,
    name: "Palpatine",
  },
];

const ALL_PAGINATIONS_IDS_FOUND_ON_PAGE_TWO: number[] = [1, 3];

describe("Test all characters list page on /characters", () => {
  it("should render several characters names on same page", () => {
    cy.visit(CHARACTERS_PAGE_TWO_URL);

    ALL_CHARACTERS_FOUND_ON_PAGE_TWO.forEach((character) => {
      cy.get("p").should("contain", character.name);
    });
  });

  it("should have links with correct hrefs according to their ids", () => {
    cy.visit(CHARACTERS_PAGE_TWO_URL);

    ALL_CHARACTERS_FOUND_ON_PAGE_TWO.forEach((character) => {
      cy.get(`a#character_id-${character.id}`).should(
        "have.attr",
        "href",
        `/characters/${character.id}`
      );
    });
  });

  it("should allow users to use page navigation", () => {
    cy.visit(CHARACTERS_PAGE_TWO_URL);

    ALL_PAGINATIONS_IDS_FOUND_ON_PAGE_TWO.forEach((paginationButtonId) => {
      cy.get(`a#pagination-${paginationButtonId}`).should(
        "have.attr",
        "href",
        `characters?page=${paginationButtonId}`
      );
    });
  });
});
