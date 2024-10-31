import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';

const login=new loginPO();
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given('I am on the login page',()=>{
    login.navigateToAdminLoginPage();
});
When('I entered my valid credentials',()=>{
    login.getUsername();
    login.getPassword();
});
When('I click the login button',()=>{
    login.loginbuttonClick();
});
Then('I should be navigated to the dashboard',()=>{
    login.assertLogin();
})