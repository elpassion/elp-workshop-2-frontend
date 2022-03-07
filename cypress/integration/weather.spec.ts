/* eslint-disable testing-library/await-async-utils */
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const OPEN_WEATHER_MAP_API_KEY = Cypress.env('openWeatherApi')
const WEATHERBIT_API_KEY = Cypress.env('weatherBitApi')

describe("fetching data from two weather API's by passing lat and lon parameters", () => {
  it("opens the browser", () => {
    websiteIsOpened()
  })

  it("click get started button to access weather route", () => {
    checkElement('.getStarted-btn', 'GET STARTED')
  })
  it("fills data for request", () => {
    testInputById('#longitude', '-78')
    testInputById('#latitude', '35')
    chooseAPIData('.dialog-btn', 'Choose API', 'Open Weather Map API')
  })
  it("shows data from Open Weather Map API on click", () => {
    cy.intercept('GET', `/data/2.5/onecall?lat=35&lon=-78&exclude=hourly,minutely,daily&appid=${OPEN_WEATHER_MAP_API_KEY}`).as('Open-Weather-Map-API')
    testConfirmationButtonAPIRequest('.confirm-btn', 'Search Weather Details', '@Open-Weather-Map-API')
  })
  it("changes to the other API url request", () => {
    cy.intercept('GET', `/v2.0/current?lat=35&lon=-78&key=${WEATHERBIT_API_KEY}`).as('Weatherbit-API')
    chooseAPIData('.dialog-btn', 'Open Weather Map API', 'Weatherbit API')
    cy.wait('@Weatherbit-API').its('response.statusCode').should('eq', 200)
  })
  it("goes back to previous page", () => {
    checkElement('.previous-route', 'Try another location')
  })
})

const websiteIsOpened = () => {
  cy.visit("/")
}

const checkElement = (selectorName: string, containName: string) => {
  const tab = cy.get(selectorName)
  tab.contains(containName)
  tab.click()
}

const testInputById = (selectorName: string, coordValue: string) => {
  const input = cy.get(selectorName)
  input.should("have.value", '')
  input.type(coordValue)
  input.should("have.value", coordValue)
}

const chooseAPIData = (selectorName: string, containName: string, APIName: string) => {
  const APINameToClass = APIName.split(' ').join('')
  const dialogBtn = cy.get(selectorName)
  dialogBtn.contains(containName)
  dialogBtn.click()
  const dialogModalBtn = cy.get(`.${APINameToClass}`)
  dialogModalBtn.contains(APIName)
  dialogModalBtn.click()
}

const testConfirmationButtonAPIRequest = async (selectorName: string, containName: string, aliasName: string) => {
  const btn = cy.get(selectorName)
  btn.contains(containName)
  btn.click()
  cy.wait(aliasName).its('response.statusCode').should('eq', 200)
}
const testChangerApiRequest = async (selectorName: string, containName: string, aliasName: string) => {
  const btn = cy.get(selectorName)
  btn.contains(containName)
  btn.click()
  cy.wait(aliasName).its('response.statusCode').should('eq', 200)
}
