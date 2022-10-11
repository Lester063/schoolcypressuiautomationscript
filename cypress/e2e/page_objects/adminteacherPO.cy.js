class Adminteacher{
    enterteacherDetails(){
        cy.get('#teacher_firstname',{timeout:300}).type('Erica');
        cy.get('#teacher_middlename',{timeout:300}).type('Tuazon');
        cy.get('#teacher_lastname',{timeout:300}).type('Ventura');
        cy.get('#teacher_contactnumber',{timeout:300}).type('09212483577');
        cy.get('#teacher_userlevel',{timeout:300}).select('TEACHER');
        cy.get('#teacher_department',{timeout:300}).select('math');
        cy.get('#teacher_rank',{timeout:300}).select('teacher1');
    }
    newteacherdetails(){
        cy.get('#put_teacher_lastname',{timeout:300}).type('Venturaaa');
    }
}

export default Adminteacher