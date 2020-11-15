/// <reference types="cypress"/>

import {HomePage} from "../../support/page_objects/homePage";

describe('Login suite', () => {

  const email = 'tt2857506@gmail.com'
  const password = 'testtest2857506'
  const wrongPassword = 'testtest'

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should be logined', () => {
    const homePage = new HomePage()
    const loginPage = homePage.navigateToLoginPage()
    const accountPage = loginPage.login(email, password)
    accountPage.getMyAccountTitle().should('to.be.visible')
  })

  it('should not be logined with wrong password', () => {
    const homePage = new HomePage()
    const loginPage = homePage.navigateToLoginPage()
    loginPage.typeEmail(email)
    loginPage.typePassword(wrongPassword)
    loginPage.submitLogin()
    loginPage.getErrorMessage().should('to.be.visible')
  })

})
