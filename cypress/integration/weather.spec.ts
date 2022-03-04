/* eslint-disable no-undef */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("example", () => {
  it("shows data", () => {
    websiteIsOpened()


    testTabByValue('.tab-1', 'Open Weather Map API')

    testInputByLabel('label[for="latitude"]', 'Latitude', '58.93')
    testInputByLabel('label[for="longitude"]', 'Longitude', '13.58')

    testConfirmationButton('.confirm-btn', 'Find Weather Details')

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
const testConfirmationButton = (selectorName: string, containName: string) => {
  const btn = cy.get(selectorName)
  btn.contains(containName)
  btn.click()
  cy.focused().contains(containName)
}
