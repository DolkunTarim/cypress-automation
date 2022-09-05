import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../pages/SignInPage";
import DashboardPage from "../../pages/DashboardPage";
import UtilityPage from "../../pages/UtilityPage";
import ProductPage from "../../pages/ProductPage";
const username=Cypress.config("USERNAME")
const password=Cypress.config("PASSWORD")
const signinpage = new SignInPage()
const dashboardpage = new DashboardPage()
const utilitypage=new UtilityPage()
const productPage=new ProductPage()

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
Given(/^an admin user is on the dashboard$/, function () {
    cy.get('i.fa.fa-sign-out').should('exist')
});

Given(/^admin has a new product$/, function () {
console.log('Add a new product')
});
When(/^admin fill out the new product form$/, function () {
var timestamp=utilitypage.getLocalTime()
productPage.addAProduct('test_product_'+timestamp,'Sony','test_product_'+timestamp)
});
Then(/^a new product should be created$/, function () {
    cy.get('div.success').should('have.text','Product successfully created.')
});
When(/^the user clicks on the products link$/, function () {
    cy.get('#nav_products').click()

});
Then(/^the user should see all the products$/, function () {
const totalProducts=cy.get('div.pagination>span').invoke('text').then((text)=>{
    var productCount = text;
    var pattern = /[0-9]+/g;
    var number = productCount.match(pattern);
    assert(number>=1)
})

});