class GooglePage
{
    constructor() {
    }
    search(searchWord){
        cy.visit('https://www.google.com')
        cy.get('input[name="q"]').type(searchWord).type('{enter}')
      return  cy.get('#result-stats').should('be.visible')
    }
}
export default GooglePage