const {faker} = require('@faker-js/faker')
faker.locales.pt_BR

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", ()=>{
    var fName = faker.name.firstName();
    var lName = faker.name.lastName();
    var email = faker.internet.email();
    var someText = faker.lorem.text();
    
    cy.get('#firstName').type(fName,{delay:0}).should('have.value', fName);
    cy.get('#lastName').type(lName,{delay:0}).should('have.value', lName);
    cy.get('#email').type(email,{delay:0}).should('have.value', email);
    cy.get('#open-text-area').type(someText,{delay:0}).should('have.value', someText);
    cy.get('.button').click();
    cy.get('.success').should('be.visible');
});