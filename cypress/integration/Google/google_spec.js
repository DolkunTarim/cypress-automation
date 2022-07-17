import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//const {When, Then} = require("cucumber");

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
});

When(`I type a {string} in the search box and press enter`,  (searchWord) => {
    cy.get("input[name='q']").type(searchWord).type("{enter}")
});

Then(`I see a search result`, () =>{
    cy.get("#result-stats").should("be.visible")
});