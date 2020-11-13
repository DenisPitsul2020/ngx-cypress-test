/// <reference types="cypress"/>

describe('Smart Table suite', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Tables & Data').click();
    cy.contains('Smart Table').click();
  })

  it('Test add user to table', () => {
    const userToAdd = {
      firstName: 'Denys',
      lastName: 'Pitsul',
      userName: 'DenisPitsul',
      email: 'denia.pitsul@gmail.com',
      age: 21,
    }

    cy.get('thead').find('.nb-plus').click()
    cy.get('thead tr').eq(2).then(tableRow => {
      cy.wrap(tableRow).find('[placeholder="First Name"]').type(userToAdd.firstName)
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type(userToAdd.lastName)
      cy.wrap(tableRow).find('[placeholder="Username"]').type(userToAdd.userName)
      cy.wrap(tableRow).find('[placeholder="E-mail"]').type(userToAdd.email)
      cy.wrap(tableRow).find('[placeholder="Age"]').type(userToAdd.age)
      cy.wrap(tableRow).find('.nb-checkmark').click()
    })
    cy.get('tbody tr').first().find('td').then(tableColumns => {
      cy.wrap(tableColumns).eq(2).should('contain', userToAdd.firstName)
      cy.wrap(tableColumns).eq(3).should('contain', userToAdd.lastName)
      cy.wrap(tableColumns).eq(4).should('contain', userToAdd.userName)
      cy.wrap(tableColumns).eq(5).should('contain', userToAdd.email)
      cy.wrap(tableColumns).eq(6).should('contain', userToAdd.age)
    })
  })

  it('Test update user in table', () => {
    const userToUpdate = {
      userName: '@jack_sparrow',
      age: 35,
    }

    cy.get('tbody').contains('tr', 'Jack').then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Username"]').clear().type(userToUpdate.userName)
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(userToUpdate.age)
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(4).should('contain', userToUpdate.userName)
      cy.wrap(tableRow).find('td').eq(6).should('contain', userToUpdate.age)
    })
  })

  it('Test delete user from table', () => {
    cy.get('tbody').contains('tr', 'Larry').find('.nb-trash').click();
    cy.on('window:confirm', () => true)
    cy.get('tbody').contains('tr', 'Larry').should('not.to.exist')
  })

})
