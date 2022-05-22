class CustomerPage{
    constructor() {
    }
    addANewCustomer(firstName,lastName,email)
    {
        cy.get('a:contains("Customer List")').click()
        cy.get('a:contains("Add Customer")').click()
        cy.get('img[rel="#customer_status"]').click()
        cy.get('#cust-firstname').type(firstName)
        cy.get('#cust-lastname').type(lastName)
        cy.get('#cust-email').type(email)
        cy.get('input[value="Save"]').click()
        cy.get('div.success').should('have.text','Customer successfully added.')
    }
}
export default CustomerPage