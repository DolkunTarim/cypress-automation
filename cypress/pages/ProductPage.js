class ProductPage{
    constructor() {
    }
    addAProduct(productName,manufacturer,productCode)
    {
        cy.get('#nav_products').click()
        cy.get('a:contains("Add Product")').click()
        cy.get('#name').type(productName)
        cy.get('#manufacturer').select(manufacturer)
        cy.get('#condition').select(('New'))
        cy.get('#product_code').type(productCode)
        cy.get('input[value="Save"]').click()
        cy.get('div.success').should('have.text','Product successfully created.')
    }

}
export default ProductPage