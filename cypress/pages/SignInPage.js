class SignInPage {

    constructor() {

    }

    login(username,password)
    {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#login').click()
    }

}
export default SignInPage

