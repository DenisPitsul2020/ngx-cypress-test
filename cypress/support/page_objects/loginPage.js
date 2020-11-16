
export class LoginPage {

  typeEmail(email) {
    cy.get('#email').type(email)
    return this;
  }

  typePassword(password) {
    cy.get('#passwd').type(password)
    return this;
  }

  submitLogin() {
    cy.get('#SubmitLogin').click()
  }

  login(email, password) {
    this.typeEmail(email)
    this.typePassword(password)
    this.submitLogin()
  }

  getErrorMessage() {
    return cy.get('.alert-danger p')
  }

}

export const loginPage = new LoginPage()
