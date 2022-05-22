import SignInPage from "../pages/SignInPage";
import DashboardPage from "../pages/DashboardPage";
import CustomerPage from "../pages/CustomerPage";
import UtilityPage from "../pages/UtilityPage";

const signinpage = new SignInPage()
const dashboardpage = new DashboardPage()
const customerpage=new CustomerPage()
const utilitypage=new UtilityPage()

describe('admin user should be able to add a customer', function () {
    before('verify user login', function () {
        cy.visit(Cypress.config('URL'))
        signinpage.login(Cypress.config('USERNAME'), Cypress.config('PASSWORD'))
        cy.getCookies()
        cy.get('i.fa.fa-sign-out').should('exist')
    })
    beforeEach(function () {
        cy.getCookies(cookies=>{
            const namesOfCookies=cookies.map(c=>c.name)
            Cypress.Cookies.preserveOnce(...namesOfCookies)
        })
    })
    it('admin user should see a customer link ', function () {
        cy.get('a:contains("Customer List")').should('exist')

    })
    it('User should be able to see a product link ', function () {
        cy.get('#nav_products').should('exist')
    })

    it('admin user should be able to add a customer ', function () {
        var todayDate = utilitypage.getLocalTime()
        customerpage.addANewCustomer('DemoFirstName-'+todayDate,'DemoLastName-'+todayDate,'DemoUser'+todayDate+'@test.com')
    })
    it('dummy test', function () {
        var mydate = utilitypage.getLocalTime();
        console.log(mydate)
    })
    afterEach(() => {
        //Code to Handle the Sesssions in cypress.
        //Keep the Session alive when you jump to another test
        let str = [];
        cy.getCookies().then((cook) => {
            cy.log(cook);
            for (let l = 0; l < cook.length; l++) {
                if (cook.length > 0 && l == 0) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                } else if (cook.length > 1 && l > 1) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                }
            }
        })
    })

    after(function ()
    {
        dashboardpage.logout()
        cy.get('#username').should('exist')
    })

})
