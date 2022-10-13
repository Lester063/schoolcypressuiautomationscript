class SubjectCourse{
    addsubjectDetails(){
        cy.get('#newSubject',{timeout:300}).type('this is new');
        cy.get('#subjectCode',{timeout:300}).type('code');
        cy.get('#description',{timeout:300}).type('description');
    }
}

export default SubjectCourse