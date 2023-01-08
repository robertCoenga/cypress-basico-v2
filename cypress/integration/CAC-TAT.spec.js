/// <reference types="Cypress"/>
import '../support/commands'

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('/src/index.html'));

    it('verifica o título da aplicação', () => {
        cy.title().should('eq','Central de Atendimento ao Cliente TAT');
    });

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName').type('Robert',{delay:0}).should('have.value', 'Robert');
        cy.get('#lastName').type('Coenga',{delay:0}).should('have.value', 'Coenga');
        cy.get('#email').type('robertcoenga@gmail.com',{delay:0}).should('have.value', 'robertcoenga@gmail.com');
        cy.get('#open-text-area').type('n sei oq escrever',{delay:0}).should('have.value', 'n sei oq escrever');
        cy.get('.button').click();
        cy.get('.success').should('be.visible')
   
    });

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Robert',{delay:0}).should('have.value', 'Robert');
        cy.get('#lastName').type('Coenga',{delay:0}).should('have.value', 'Coenga');
        cy.get('#email').type('robertcoenga@gmail.com',{delay:0}).should('have.value', 'robertcoenga@gmail.com');
        cy.get('.button').click();
        cy.get('.error').should('be.visible')
    });

    it('telefone só aceita valores numéricos', () => {
        cy.get('#phone').type('teste#/\\@´´').should('be.empty')
    });
    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Robert',{delay:0}).should('have.value', 'Robert');
        cy.get('#lastName').type('Coenga',{delay:0}).should('have.value', 'Coenga');
        cy.get('#email').type('robertcoenga@gmail.com',{delay:0}).should('have.value', 'robertcoenga@gmail.com');
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('n sei oq escrever',{delay:0}).should('have.value', 'n sei oq escrever');
        cy.get('.button').click();
        cy.get('.error').should('be.visible')
    });

    it('teste de clear input value', () => {
        cy.get('#firstName').type('Robert',{delay:0}).should('have.value', 'Robert').clear().should('have.value','');
        cy.get('#lastName').type('Coenga',{delay:0}).should('have.value', 'Coenga').clear().should('have.value','')
        cy.get('#email').type('robertcoenga@gmail.com',{delay:0}).should('have.value', 'robertcoenga@gmail.com').clear().should('have.value','')
    });

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('.button').click();
        cy.get('.error').should('be.visible')
    });

    it('cadastro Realizado Com Sucesso', () => {
        cy.fillMandatoryFieldsAndSubmit()
    });     
})