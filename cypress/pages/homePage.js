export class HomePage{

    visitPage(){
      cy.visit('https://www.amazon.com/')
    }

    searchItem(){
        cy.get("#twotabsearchtextbox").type('handbag{enter}')
        cy.wait(3000)
    }

    selectFifthItem(){
        cy.get('[data-component-type="s-search-result"]')
        .eq(4)
        .find('a')
        .first()
        .click({force: true})
        cy.get('#productTitle').should('be.visible')
   }
}