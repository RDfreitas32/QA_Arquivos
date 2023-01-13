// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --//
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getToken', (email, password) => {
    cy.request({
        method: 'POST', 
        url: 'https://barrigarest.wcaquino.me/signin',
        body: {
            email: email,
            redirecionar:false,
            senha:password
        } 
    }).its('body.token').should('not.be.empty')
    .then(token => {
        return token
        })
})

Cypress.Commands.add('resetRest', () => {
    cy.getToken('rodrigo.freitas@email.com', '123456').then( token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
            headers: {Authorization:`JWT ${token}`}
        }).its('status').should('be.equal', 200)
    })
})

