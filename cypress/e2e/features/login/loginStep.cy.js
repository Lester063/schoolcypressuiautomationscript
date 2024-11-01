import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';

const login=new loginPO();
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//admin
Given('I am on the login page, {string}',async(urlPage)=>{
    login.navigateToAdminLoginPage(urlPage);
});
When('I entered my valid credentials, {string} {string}',async(email, password)=>{
    login.inputEmail(email);
    login.inputPassword(password);
});
When('I click the login button',()=>{
    login.loginButtonClick();
});
Then('I should be navigated to the dashboard, {string}',async(redirectedLink)=>{
    login.assertLogin(redirectedLink);
});