import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import globalobjects from '../../page_objects/globalObjects.cy.js';
import adminTeacher from '../../page_objects/adminteacherPO.cy.js';
import { school } from "../../../../schoolpageobject.js"
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
    globalobject.clickButton(school.navbarLink.viewTeacher,'text');
});
Then('I should be navigated to view teachers page successfully',()=>{
    globalobject.assertText(school.navbarLink.viewTeacher, 'visible');
});

//create teacher
When('I navigated to VIEW TEACHERS > Add Teacher',()=>{
    adminteacher.createTeacherPage();
});
When('I entered the details of teacher',()=>{
    adminteacher.enterTeacherDetails();
});
When('I click the add teacher button',()=>{
    adminteacher.addTeacherButton();
});
Then('the teacher account should be created successfully',()=>{
    globalobject.assertText('09212483577','visible');
});

//update teacher
When('I navigated to VIEW TEACHERS page',()=>{
    globalobject.clickButton(school.navbarLink.viewTeacher,'text');
})
When('I search the teacher',()=>{
    globalobject.search(school.searchTeacher,'Forthepractice');
});
When('I click the Edit Data button for teacher',()=>{
    globalobject.clickButton(school.teacherEditButton,'!text');
});
When('I entered the new data',()=>{
    adminteacher.newTeacherDetails();
});
When('I click the update teacher button',()=>{
    globalobject.clickButton(school.editTeacherSubmit,'!text');
});
When('I close the update modal box',()=>{
    globalobject.clickButton(school.modalCloseButton,'!text');
});
Then('the data should be updated successfully',()=>{
    globalobject.assertText('Forthepracticeupdate','visible');
});

When('I click the delete button for teacher',()=>{
    globalobject.clickButton(school.deleteTeacherButton,'!text');
});
Then('the teacher account should be deleted successfully',()=>{
    globalobject.assertText('Forthepracticeupdate','notvisible');
})
