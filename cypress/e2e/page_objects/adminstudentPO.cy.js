class AdminStudent{
    gotoPage(namePage){
        cy.contains(namePage,{timeout:300}).click();
    }
    enterstudentDetails(){
        cy.get('#firstname',{timeout:300,force: true}).type('Edddreeeen');
        cy.get('#middlename',{timeout:300}).type('D');
        cy.get('#lastname',{timeout:300}).type('Paynadoo');
        cy.get('#course').select('ABM');
        cy.get('#contact_number',{timeout:300}).type('09212483577');
        cy.get('#year').select('11');
    }
    newdatastudent(){
        cy.get('#put_firstname',{timeout:300}).clear().type('Edreeeeen Maeee');
        cy.get('#put_lastname',{timeout:300}).clear().type('Paynadoooo');
    }
    /*
    assertText(text,display){
        if(display=='visible'){
            cy.contains(text,{timeout:300}).should('be.visible')
        }
        else if(display=='notvisible'){
            cy.contains(text,{timeout:300}).should('not.visible')
        }
    }
    clickButton(identifier,type){
        if(type=='text'){
            cy.contains(identifier,{timeout:300}).click();
        }
        else{
            cy.get(identifier,{timeout:300}).click();
        }
        
    }
    search(identifier,data){
        cy.get(identifier,{timeout:300}).type(data);
        cy.wait(300);
    }
    */

}

export default AdminStudent