class DashboardPage{
    constructor() {
    }
    logout()
    {
        cy.get('i.fa.fa-sign-out').click()
    }
}
export default DashboardPage