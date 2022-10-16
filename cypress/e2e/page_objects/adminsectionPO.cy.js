class Section{
    selectOption(identifier,elNumber,value){
        cy.get(identifier,{timeout:300}).eq(elNumber).select(value,{timeout:300});
    }
}

export default Section