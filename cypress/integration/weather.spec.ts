/* eslint-disable testing-library/await-async-utils */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("example", () => {
  beforeEach(() => {
    websiteIsOpened()
  })

  it("shows data", () => {
    cy.intercept('GET', '/data/2.5/weather?q=Gdynia,pl&appid=d45fdad17e3b225c88a4be40c4a6ee2b&units=metric').as('weather-data')
    testTabByValue('.tab-1', 'Open Weather Map API')

    testInputByLabel('label[for="latitude"]', 'Latitude', '58.93')
    testInputByLabel('label[for="longitude"]', 'Longitude', '13.58')

    testConfirmationButtonAPIRequest('.confirm-btn', 'Find Weather Details')

    // testTabByValue('.tab-2', 'Rapid Weather API')

  })
})

const websiteIsOpened = () => {
  cy.visit("http://localhost:3000")
}

const testTabByValue = (selectorName: string, containName: string) => {
  const tab = cy.get(selectorName)
  tab.contains(containName)
  tab.click()
}

const testInputByLabel = (selectorName: string, containName: string, coordValue: string) => {
  const label = cy.get(selectorName)
  label.contains(containName)
  label.type(coordValue)

  //Check input from current label
  cy.get(`#${containName.toLowerCase()}`).should("have.value", coordValue)
}
const testConfirmationButtonAPIRequest = async (selectorName: string, containName: string) => {
  const btn = cy.get(selectorName)
  btn.contains(containName)
  btn.click()
  cy.wait('@weather-data').its('response.statusCode').should('eq', 200)
}
