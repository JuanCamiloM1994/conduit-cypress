/// <reference types="cypress" />

const testData = [
    {
        username: '12',
        errorMessage: 'username is too short (minimum is 3 characters)',
        errorIsDisplayed: true
    },
    {
        username: '123',
        errorMessage: 'username',
        errorIsDisplayed: false
    },
    {
        username: '123456789012',
        errorIsDisplayed: false
    },
    {
        username: '123456789012345678901',
        errorMessage: 'username is too long (maximum is 20 characters)',
        errorIsDisplayed: true
    }
]

testData.forEach(data => {
    it(`data driven test for username: ${data.username}`, () => {
        cy.visit('/')
        cy.contains('Sign up').click()
        cy.get('input[placeholder="Username"]').type(data.username)
        cy.get('input[placeholder="Email"]').type('testuser@example.com')
        cy.get('input[placeholder="Password"]').type('Password123')
        cy.contains('button', 'Sign up').click()
        if (data.errorIsDisplayed) {
            cy.get('.error-messages').should('contain.text', data.errorMessage)
        } else {
            cy.get('.error-messages').should('contain.text', data.errorMessage)
        }
    })
})
