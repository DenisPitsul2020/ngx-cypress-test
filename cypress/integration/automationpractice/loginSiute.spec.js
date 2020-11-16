/// <reference types="cypress"/>

import {homePage} from "../../support/page_objects/homePage";
import {loginPage} from "../../support/page_objects/loginPage";
import {accountPage} from "../../support/page_objects/accountPage";

describe('Login suite', () => {

  let data = {}

  before(() => {
    cy.fixture('testData').then(testData => {
      data = testData;
    })
  })

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should be logined', () => {
    homePage.navigateToLoginPage()
    loginPage.login(data.email, data.password)
    accountPage.getMyAccountTitle().should('to.be.visible')
  })

  it('should not be logined with wrong password', () => {
    homePage.navigateToLoginPage()
    loginPage.typeEmail(data.email)
      .typePassword(data.wrongPassword)
      .submitLogin()
    loginPage.getErrorMessage().should('to.be.visible')
  })

})
