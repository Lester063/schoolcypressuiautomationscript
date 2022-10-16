import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';
import adminnavigatePO from '../../page_objects/adminnavigatePO.cy.js';
import globalobjects from '../../page_objects/globalObjects.cy.js';
const globalobject = new globalobjects();
const login=new loginPO();
const adminNavigate=new adminnavigatePO();
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


Given('I logged in as Admin',()=>{
    globalobject.assertText('Lester','visible');
});

When('I click the link, {string}',async(link)=>{
    adminNavigate.getLink(link);
});

Then('I should be navigated to the page successfully, {string}',async(url)=>{
    adminNavigate.assertUrl(url);
})