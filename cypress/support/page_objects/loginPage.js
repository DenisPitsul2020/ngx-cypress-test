import {AccountPage} from "./accountPage";

export class LoginPage {

  typeEmail(email) {
    cy.get('#email').type(email)
  }

  typePassword(password) {
    cy.get('#passwd').type(password)
  }

  submitLogin() {
    cy.get('#SubmitLogin').click()
  }

  login(email, password) {
    this.typeEmail(email)
    this.typePassword(password)
    this.submitLogin()
    return new AccountPage()
  }

  getErrorMessage() {
    return cy.get('.alert-danger p')
  }

}
