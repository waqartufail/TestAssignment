/// <reference types="cypress"/>


class firstsignin {


    visit() {
        const temp = require('../cypress/fixtures/data.json')
        cy.visit(temp.devUrl)
        // cy.wait(3000)
    }

    signinbutton(){

        return cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()

    }

    emailsignin(){

        const temp = require('../cypress/fixtures/data.json')
        return cy.get('#join_neu_email_field').click().type(temp.firstemail)
    }

    passsignin(){

        const tmp = require('../cypress/fixtures/data.json')
        return cy.get('#join_neu_password_field').click().type(tmp.passwordone)
    }

    signinlogin(){

        cy.wait(2000)
        cy.get("button[value='sign-in']").click() 
        cy.get('//h1[1]').should('have.text', 'Welcome to Etsy')
    }

}

export default firstsignin