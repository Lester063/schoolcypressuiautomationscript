import { school } from "../../../schoolpageobject.js";
import globalobjects from '../page_objects/globalObjects.cy.js';
const globalobject = new globalobjects();
subjects = ['walato','78','79','80','81'];
class Section{
    openaddsectionModal(){
        globalobject.clickButton(school.addsectionmodalTrigger,'!text');
    }
    addsubjectselectOption(){
        //adjust numbers depends on your need
        for(var i=0;i<3;i++){
            globalobject.clickButton(school.addselectSection,'!text');
        }
    }
    selectyearSection(){
        globalobject.selectOption(school.gradeyear,0,'11');
        globalobject.selectOption(school.section,0,'A');
        //cy.get(school.gradeyear,{timeout:300}).eq(0).select('11',{timeout:300});
        //cy.get(school.section,{timeout:300}).eq(0).select('A',{timeout:300});
    }
    selectSubject(){
        for(var xy=1;xy<=4;xy++){
            globalobject.selectOption(school.selectsubject,xy,subjects[xy]);
            //cy.get(school.selectsubject,{timeout:300}).eq(xy).select(subjects[xy],{timeout:300});
       }
    }
    selectCourse(){
        globalobject.selectOption(school.selectcourse,0,'ABM');
    }
    entermaxstudentNumber(){
        cy.get(school.maxstudentSection).type('3');
    }
    start_end(){
        cy.get(school.start_date).click().type('2022-10-16T08:30');
        cy.get(school.end_date).click().type('2022-10-16T20:30');
    }
    addsectionButton(){
        globalobject.clickButton(school.addsectionButton,'!text');
    }
    assertsectionCreated(){
        globalobject.assertText('Created Section Successfully.','visible');
    }
}

export default Section

//Created Section Successfully