/// <reference types="cypress"/>

class register {


    visit() {
        const temp = require('../cypress/fixtures/data.json')
        cy.visit(temp.devUrl)
        // cy.wait(3000)
    }

    signinbutton(){

        return cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()

    }

    registerbutton(){

        return cy.get('.wt-flex-shrink-xs-0 > .wt-display-flex-xs').click()
    }

    emailaddress(){

        const temp = require('../cypress/fixtures/data.json')
        return cy.get('#join_neu_email_field').click().type(temp.firstemail)
    }

    namefirst(){

        const temp = require('../cypress/fixtures/data.json')
        return cy.get('#join_neu_first_name_field').click().type(temp.nameone)
    }

    regpasswd(){

        const temp = require('../cypress/fixtures/data.json')
        return cy.get('#join_neu_password_field').click().type(temp.passwordone)
    }

    regbutton(){

        const temp = require('../cypress/fixtures/data.json')
        return cy.get('.wt-validation > .wt-btn').click()
    }

}

export default register