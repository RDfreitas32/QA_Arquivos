
describe('Visitando cite, testes básicos', () => {

    it('Should visit a page and assert the title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // Duas formas iguais de realizar o mesmo teste
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo'); // posso usar o .debud() , me dara mais informações do teste

        pause() // aguardará meu comando para continuar os testes.
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo'); // o lugar do and tb pode should
    })
})