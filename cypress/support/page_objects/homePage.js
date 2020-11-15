import {LoginPage} from "./loginPage";

export class HomePage {

  navigateToLoginPage() {
    cy.get('.login').click()
    return new LoginPage()
  }

}
