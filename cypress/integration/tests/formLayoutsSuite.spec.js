/// <reference types="cypress"/>

describe('Form Layouts suite', () => {

  it('Test Using the Grid form', () => {
      cy.visit('/');
      cy.contains('Forms').click();
      cy.contains('Form Layouts').click();

      cy.contains('nb-card', 'Using the Grid').then(card => {
          cy.wrap(card).find('#inputEmail1').type('denis.pitsul@gmail.com')
          cy.wrap(card).find('#inputPassword2').type('12345678')
          cy.wrap(card).find('[type="radio"]').then(radioButtons => {
              cy.wrap(radioButtons).eq(1).check({force: true})
          })
          cy.wrap(card).find('button[status="primary"]').click()
      })

      // page reload
      cy.wait(1000);
      cy.contains('nb-card', 'Using the Grid').then(card => {
        cy.wrap(card).find('#inputEmail1').should("contain", "")
        cy.wrap(card).find('#inputPassword2').should("contain", "")
      })
  })

})
