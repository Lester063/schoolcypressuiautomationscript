import { Given, When, Then,And, Before } from "@badeball/cypress-cucumber-preprocessor";
import { school } from "../../../../schoolpageobject.js"//importing globalobjectss (css/path)
import adminenrolledPO from '../../page_objects/adminenrolledPO.cy.js';
import teacherPO from '../../page_objects/teacherPO.cy.js';

import loginPO from '../../page_objects/loginPO.cy.js';

const enrolled = new adminenrolledPO()
const teacher =new teacherPO();
const login=new loginPO();

//advisory
Given('I am assigned to a section as an Adviser',()=>{
    enrolled.thereIsEnrolledstudent();
});
Given('I am logged in as a Teacher',()=>{
    login.loginUser('Teacher', 'test1teacher1@school.com', 'qwerty123');
});
When('I Navigate to My advisory',()=>{
    teacher.goToMyAdvisoryPage();
});
When('I click the view link to view the list of my student',()=>{
    teacher.viewAdvisoryStudent();
});
Then('I should see the student list',()=>{
    teacher.assertAdvisoryListPage();
});
/*
And('I delete the section to clear the section table',()=>{
})
*/


//section handle
Given('I am assigned to a section as a subject teacher',()=>{
    enrolled.thereIsEnrolledstudent();

    //login admin
    login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    //accept student
    enrolled.viewEnrolledPage();
    enrolled.clickPendingTab();
    enrolled.clickPendingStudent();
});
/*
Given('I am logged in as a Teacher',()=>{

});
*/
When('I Navigate to Section Handle page',()=>{
    teacher.goToSectionHandlePage();
});
When('I click the view link to view the list of the student',()=>{
    teacher.viewSectionHandleStudent();
});
/*
Then('I should see the student list',()=>{
    teacher.assertAdvisoryListPage();
});
And('I delete the section to clear the section table',()=>{
})
*/