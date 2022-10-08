import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
Given('I am on the login page',()=>{
    cy.visit('http://localhost/college/login/loginadmin.php');
});
When('I entered my valid credentials',()=>{
    cy.get('.inputUsername',{timeout:300}).type('admin@school.com');
    cy.get('.inputPassword',{timeout:300}).type('admin123');
});
When('I click the login button',()=>{
    cy.get('.login-submitButton',{wait:3000}).click();
});
Then('I should be navigated to the dashboard',()=>{
    cy.url().should('eq', 'http://localhost/college/admin/adminPage/adminpage.php')
})