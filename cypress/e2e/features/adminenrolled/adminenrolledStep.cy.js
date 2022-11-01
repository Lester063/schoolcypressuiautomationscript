import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import adminenrolledPO from '../../page_objects/adminenrolledPO.cy.js';
import adminsectionPO from '../../page_objects/adminsectionPO.cy.js';
const enrolled = new adminenrolledPO()
const adminSection = new adminsectionPO();
//actually a background but I have to remove it here and in feature
Given('there is an enrolled pending student',()=>{
    enrolled.thereisEnrolledstudent();
});

//scenario for accepting student
Given('I navigated to VIEW ENROLLED Page',()=>{
    enrolled.viewenrolledPage();
});
When('I click the PENDING tab',()=>{
    enrolled.clickPendingtab();
});
When('I click the first student on the list of pending',()=>{
    enrolled.clickPendingstudent();
});
Then('that student should be accepted',()=>{
    enrolled.assertIfstudentaccepted();
});
Then('should be remove on the pending list',()=>{
    enrolled.assertPendinglist();
});

//dropp subject
Given('I click the ADD DROP link of the student',()=>{
    enrolled.studentAdddropsubject();
});
When('I drop all the subjects of user',()=>{
    enrolled.dropSubject();
});
Then('all subject should be move on to the DROPPED table',()=>{
    enrolled.assertDropsubject();
});


//add back
When('I add back the dropped subject',()=>{
    enrolled.addagainSubject();
});
Then('the subject should be back',()=>{
    enrolled.assertAddbacksubject();
});

//delete section
When('I delete the section to clear the data in db',()=>{
    adminSection.deletesectionButton();
});
/*
Then('section should be deleted',()=>{
    adminSection.assertsectionDeleted();
})
*/
