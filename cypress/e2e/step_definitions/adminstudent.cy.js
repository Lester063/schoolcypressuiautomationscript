import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
//Should be able to create student account
Given('I am logged in as an Admin',()=>{
    cy.visit('http://localhost/college/login/loginadmin.php');
    cy.get('.inputUsername',{timeout:300}).type('admin@school.com');
    cy.get('.inputPassword',{timeout:300}).type('admin123');
    cy.get('.login-submitButton',{wait:3000}).click();
});
Given('I navigate to VIEW STUDENT > Add Student',()=>{
    cy.contains('VIEW STUDENTS',{timeout:300}).click();
    cy.contains('Add Student',{timeout:300}).click();
});

When('I enter the details of student',()=>{
    cy.get('#firstname',{timeout:300,force: true}).type('Edddreeeen');
    cy.get('#middlename',{timeout:300}).type('D');
    cy.get('#lastname',{timeout:300}).type('Paynadoo');
    cy.get('#course').select('ABM');
    cy.get('#contact_number',{timeout:300}).type('09212483577');
    cy.get('#year').select('11');
});
When('I click the create button',()=>{
    cy.get('#addbutton').click();
});
Then('the account should be created successfully',()=>{
    cy.get('#studentbox_data').should('be.visible');
});
//update student data
Given('I am in the student page',()=>{
    cy.contains('VIEW STUDENTS',{timeout:300}).click();
});
Given('I click the Edit Data button',()=>{
    cy.get('.editbutton',{timeout:300}).last().click();
});
When('I entered new data of the student',()=>{
    cy.get('#put_firstname',{timeout:300}).clear().type('Edreeeeen Maeee');
    cy.get('#put_lastname',{timeout:300}).clear().type('Paynadoooo');
});
When('I click the update button',()=>{
    cy.get('#submitbutton-editstudent',{timeout:300}).click();
});
When('I close the modal box',()=>{
    cy.get('.closebutton-addstudent',{timeout:300}).click();
});
Then('the student data should be update successfully',()=>{
    cy.contains('Edreeeeen Maeee',{timeout:300}).should('be.visible');
});

//Should be able to search and delete the student I created
When('I search for the student',()=>{
    cy.get('#searchStudent',{timeout:300}).type('Paynadoooo');
    cy.wait(300);
});
When('I delete the student',()=>{
    cy.contains('Delete',{timeout:300}).click();
});
Then('the student should be deleted successfully',()=>{
    cy.contains('Edreeeeen Maeee',{timeout:300}).should('not.visible')
});

