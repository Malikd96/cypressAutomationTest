/// <reference types="cypress" />

describe('Heroku App Basic Tests', () => {

    // LOGIN TEST - SUCCESS
    it('Logs in with valid credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();

        // Wait for success message
        cy.get('.flash.success').should('be.visible')
          .and('contain', 'You logged into a secure area!');

        // Confirm URL changed
        cy.url().should('include', '/secure');
    });

    // LOGIN TEST - FAILURE
    it('Fails to log in with incorrect credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('#username').type('wronguser');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();

        cy.get('.flash.error').should('be.visible')
          .and('contain', 'Your username is invalid!');
    });

    // DYNAMIC CONTENT TEST
    it('Loads content dynamically after clicking start', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');

        cy.get('#start button').click(); // Click Start button

        // Ensure content appears
        cy.get('#finish h4', { timeout: 10000 }).should('be.visible')
          .and('contain', 'Hello World!');
    });

    // API TEST
    it('Checks if dynamic content page is reachable', () => {
        cy.request('https://the-internet.herokuapp.com/dynamic_loading/1')
          .its('status')
          .should('eq', 200);
    });

});
