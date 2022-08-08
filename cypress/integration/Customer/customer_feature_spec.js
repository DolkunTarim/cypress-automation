import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../pages/SignInPage";
import DashboardPage from "../../pages/DashboardPage";
import CustomerPage from "../../pages/CustomerPage";
import UtilityPage from "../../pages/UtilityPage";
const username=Cypress.config("USERNAME")
const password=Cypress.config("PASSWORD")
const signinpage = new SignInPage()
const dashboardpage = new DashboardPage()
const customerpage=new CustomerPage()
const utilitypage=new UtilityPage()

Given(/^an admin user has an admin username and password$/, function () {
console.log(username)
console.log(password)
});
When(/^the admin user opens the login page$/, function () {
cy.visit(Cypress.config("URL"))
});
When(/^the admin user type in username and password and clicks login button$/, function () {
signinpage.login(username,password)
});
Then(/^the admin user should see a dashboard$/, function () {
    cy.get('i.fa.fa-sign-out').should('exist')
});
Given(/^admin has a new customer$/, function () {
    console.log("add a new customer")
});
When(/^admin fill out the new customer form$/, function () {
    var todayDate = utilitypage.getLocalTime()
    customerpage.addANewCustomer('DemoFirstName-'+todayDate,'DemoLastName-'+todayDate,'DemoUser'+todayDate+'@test.com')
});
Then(/^a new customer should be created$/, function () {
    cy.get('div.success').should('have.text','Customer successfully added.')
});
Given(/^an admin user is on the dashboard$/, function () {
    cy.get('i.fa.fa-sign-out').should('exist')
});
Then(/^the admin user should see a customer link$/, function () {
    cy.get('a:contains("Customer List")').should('exist')
});
Then(/^the admin user should see a product link$/, function () {
    cy.get('#nav_products').should('exist')
});