import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
Given('I logged in as Admin',()=>{
    cy.visit('http://localhost/college/login/loginadmin.php');
    cy.get('.inputUsername',{timeout:300}).type('admin@school.com');
    cy.get('.inputPassword',{timeout:300}).type('admin123');
    cy.get('.login-submitButton',{wait:3000}).click();
});
When('I click the link, {string}',async(link)=>{
    cy.contains(link,{timeout:300}).click();
});

Then('I should be navigated to the page successfully, {string}',async(url)=>{
    cy.url().should('eq', url)
})