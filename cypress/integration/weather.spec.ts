/* eslint-disable testing-library/await-async-utils */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const OPEN_WEATHER_MAP_API_KEY = Cypress.env('openWeatherApi')
const WEATHERBIT_API_KEY = Cypress.env('weatherBitApi')

describe("example", () => {
  beforeEach(() => {
    websiteIsOpened()
  })

  it("shows data from Open Weather Map API", () => {
    cy.intercept('GET', `/data/2.5/onecall?lat=35.7796&lon=-78.6382&exclude=hourly,minutely,daily&appid=${OPEN_WEATHER_MAP_API_KEY}`).as('Open-Weather-Map-API')
    testTabByValue('.tab-1', 'Open Weather Map API')

    testInputByLabel('label[for="latitude"]', 'Latitude', '35.7796')
    testInputByLabel('label[for="longitude"]', 'Longitude', '-78.6382')

    testConfirmationButtonAPIRequest('.confirm-btn', 'Find Weather Details', '@Open-Weather-Map-API')

  })

  it("(1): shows data from Weatherbit API and then (2): return back to Open Weather Map API using tab switch", () => {
    // 1
    cy.intercept('GET', `/v2.0/current?lat=35.7796&lon=-78.6382&key=${WEATHERBIT_API_KEY}`).as('Weatherbit-API')
    testTabByValue('.tab-2', 'Weatherbit API')

    testInputByLabel('label[for="latitude"]', 'Latitude', '35.7796')
    testInputByLabel('label[for="longitude"]', 'Longitude', '-78.6382')

    testConfirmationButtonAPIRequest('.confirm-btn', 'Find Weather Details', '@Weatherbit-API')

    // 2
    cy.intercept('GET', `/data/2.5/onecall?lat=35.7796&lon=-78.6382&exclude=hourly,minutely,daily&appid=${OPEN_WEATHER_MAP_API_KEY}`).as('Open-Weather-Map-API')
    testConfirmationButtonAPIRequest('.tab-1', 'Open Weather Map API', '@Open-Weather-Map-API')
  })
})

const websiteIsOpened = () => {
  cy.visit("/")
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
const testConfirmationButtonAPIRequest = async (selectorName: string, containName: string, aliasName: string) => {
  const btn = cy.get(selectorName)
  btn.contains(containName)
  btn.click()
  cy.wait(aliasName).its('response.statusCode').should('eq', 200)

}
