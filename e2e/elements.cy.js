
describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain', 'Cuidado');
        //cy.get('body').should('have.text', 'Cuidado'); forma errada, pois have.text quer todo o valor do texto
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
})