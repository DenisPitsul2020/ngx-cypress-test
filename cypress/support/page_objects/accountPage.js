export class AccountPage {

  getMyAccountTitle() {
    return cy.contains('h1', 'My account')
  }

}
