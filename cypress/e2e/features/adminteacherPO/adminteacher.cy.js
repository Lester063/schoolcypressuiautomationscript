import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import globalobjects from '../../page_objects/globalObjects.cy.js';
import loginPO from '../../page_objects/loginPO.cy.js';
import adminTeacher from '../../page_objects/adminteacherPO.cy.js';
const login=new loginPO();
const globalobject = new globalobjects();
const adminteacher=new adminTeacher();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
//navigate to view teacher page
/*
Given('I logged in as an Admin',()=>{
    globalobject.assertText('Lester','visible');
});
*/
When('I click the VIEW TEACHERS in sidebar',()=>{
    globalobject.clickButton('VIEW TEACHERS','text');
});
Then('I should be navigated to view teachers page successfully',()=>{
    globalobject.assertText('VIEW TEACHERS', 'visible');
});

//create teacher
When('I navigated to VIEW TEACHERS > Add Teacher',()=>{
    adminteacher.createteacherPage();
});
When('I entered the details of teacher',()=>{
    adminteacher.enterteacherDetails();
});
When('I click the add teacher button',()=>{
    adminteacher.addteacherButton();
});
Then('the teacher account should be created successfully',()=>{
    globalobject.assertText('09212483577','visible');
});

//update teacher
When('I navigated to VIEW TEACHERS page',()=>{
    globalobject.clickButton('VIEW TEACHERS','text');
})
When('I search the teacher',()=>{
    globalobject.search('#searchTeacher','Ventura');
});
When('I click the Edit Data button for teacher',()=>{
    globalobject.clickButton('.editteacher','!text');
});
When('I entered the new data',()=>{
    adminteacher.newteacherdetails();
});
When('I click the update teacher button',()=>{
    globalobject.clickButton('#submitbutton-editteacher','!text');
});
When('I close the update modal box',()=>{
    globalobject.clickButton('.closebutton-addstudent','!text');
});
Then('the data should be updated successfully',()=>{
    globalobject.assertText('Venturaaa','visible');
});

When('I click the delete button for teacher',()=>{
    globalobject.clickButton('.deletebutton','!text');
});
Then('the teacher account should be deleted successfully',()=>{
    globalobject.assertText('Venturaaa','notvisible');
})
