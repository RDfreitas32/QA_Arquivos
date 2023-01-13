describe('Should test at a function level', () => {

    let token

    before(() => {
        cy.getToken('rodrigo.freitas@email.com', '123456')
        .then(tkn => { 
            token = tkn
        })
    })

    beforeEach(() => {
        cy.resetRest()
    })

    it('API Testing from login', () => {

        cy.request({
            url:'https://barrigarest.wcaquino.me/contas',
            method:'POST',
            headers: {Authorization:`JWT ${token}`},
            body:{
                nome: 'Conta Via RestAPI 1'
            }
        }).as('response')   //.then(resp => console.log(resp)) // isso ñ é o bastante,  //o teste precisa fazer sua propria checagem
        cy.get('@response').then(resp => {
            expect(resp.status).to.be.equal(201)
            expect(resp.body).to.have.property('id')
            expect(resp.body).to.have.property('nome', 'Conta Via RestAPI 1')
        })
    })

})

