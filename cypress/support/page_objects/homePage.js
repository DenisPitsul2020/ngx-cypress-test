
export class HomePage {

  navigateToLoginPage() {
    cy.get('.login').click()
  }

}

export const homePage = new HomePage()

