/// <reference types="cypress"/>

describe('Testes E2E Abra sua conta justa', () =>{

    before(() => {   
        cy.visit('https://conta.justa.com.vc/onboarding')

    })
        
    it.only('Teste botão Começar e Acesso ao campo de cadastro a cada teste', () => {
        cy.contains('button', 'Começar').should('be.visible');
        cy.contains('button', 'Começar').click()
    })

    it.only('Verifica mensagens de aviso', () => {
        cy.contains('button', 'Continuar').click()
        cy.get('#field-3-feedback').should('contain', 'Insira um nome!');
        cy.get('#field-4-feedback').should('contain', 'Insira um email!');
        cy.get('#field-5-feedback').should('contain', 'Insira um telefone!');
        cy.get('#field-6-feedback').should('contain', 'Você deve aceitar nossos Termos de Uso para continuar.');
        cy.get('#field-7-feedback').should('contain', 'Você deve concordar com a nossa Política de Privacidade para continuar.');
            
    })

    it.only('Verifica mensagem de aviso com dados inválidos', () => {
        cy.get('input[placeholder="Insira seu nome completo"]').type('a');
        cy.get('input[placeholder="Insira seu e-mail"]').type('a');
        cy.get('input[placeholder="Insira seu celular"]').type('1');
        cy.contains('button', 'Continuar').click()
        cy.get('#field-3-feedback').should('contain', 'O nome deve conter ao menos 3 caracteres!');
        cy.get('#field-4-feedback').should('contain', 'Digite um e-mail válido');
        cy.get('#field-5-feedback').should('contain', 'Digite um telefone válido');
        
    })


    it('Preenche Campos com dados válidos', () => {
        cy.reload()
        cy.getAllCookies()
        cy.contains('button', 'Começar').click()
        cy.contains('p', 'Preencha os campos abaixo para abrir a sua Conta Justa:');
        cy.get('input[placeholder="Insira seu nome completo"]').click;
        cy.get('input[placeholder="Insira seu nome completo"]').type('Fulano da Silva');
        cy.get('input[placeholder="Insira seu e-mail"]').click;
        cy.get('input[placeholder="Insira seu e-mail"]').type('email.valido@email.com')
        cy.get('input[placeholder="Insira seu celular"]').click
        cy.get('input[placeholder="Insira seu celular"]').type('11911223344');
        cy.get('[data-testid="switch-onboarding-terms"] > .chakra-switch__track').click;
        cy.get('[data-testid="switch-onboarding-privacy-policies"] > .chakra-switch__track > .chakra-switch__thumb').click;
    }) 

    it('Testando a API onboarding', () => {
        cy.request({
            method:'GET',
            url:'https://conta.justa.com.vc/onboarding',
            followRedirect:true,                    
        }).then(resposta => {
            expect(resposta.status).to.be.eq(200);
            expect(resposta.body).not.be.empty
        })
    })



})