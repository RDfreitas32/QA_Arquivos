describe('Should test at a function level', () => {

    let token

    before(() => {
        cy.getToken('rodrigo.freitas@email.com', '123456')
        .then(tkn => { 
            token = tkn
        })

        
    })

it.only('Should update an account', () => {
    cy.request({
        method:'GET',
        url:'https://seubarriga.wcaquino.me/contas',
        headers: {Authorization:`JWT ${token}`},
        qs: {
            nome:'Conta para alterar'
        }
    }).then(({ body }) => { window.localStorage.setItem('authToken', body.token)  }).and(res => { console.log(res)})

})

})
// .then(({ body }) => { window.localStorage.setItem('authToken', body.token)  })
//testar o metodo get do ultimo teste de backend api, pq não esta retornando o corpo da requisição, com o id.