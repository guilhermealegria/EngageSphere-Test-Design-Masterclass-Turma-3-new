/// <reference types="cypress" />


describe(``, () => {
    context('', () => {
        it('Teste soap', () => {
            cy.task('soaprequest').then( el => {
                cy.log(el)
            })
        })
    })
})