describe("example", () => {
  it("shows data", () => {
    // given
    websiteIsOpened();

    // when

    // then
    displaysTemperature(10);
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function displaysTemperature(result: number) {
  cy.get(".temperature").contains(result);
}
