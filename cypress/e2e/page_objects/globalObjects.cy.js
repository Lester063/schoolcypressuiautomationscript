class GlobalObjects{
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
}

export default GlobalObjects