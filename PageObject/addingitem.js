/// <reference types="cypress"/>


class addingitem {


    visit() {
        const temp = require('../cypress/fixtures/data.json')
        cy.visit(temp.devUrl)
        // cy.wait(3000)
    }

    clickitem(){

        cy.wait(1000)
        cy.get('body > main:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click()
        // cy.get('.wt-grid > :nth-child(1) > .js-merch-stash-check-listing > .listing-link > .v2-listing-card__img > :nth-child(1) > :nth-child(1) > .placeholder-content > .placeholder > .height-placeholder > .wt-width-full').click()
        cy.visit('https://www.etsy.com/listing/1020721243/large-macrame-wall-hanging-boho-wood?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=wall+decor&ref=sc_gallery-1-1&frs=1&pop=1&sts=1&plkey=5db14dcafaf7dfd94c12d96387224b84766eecf8%3A1020721243')
        cy.get('#variation-selector-0').select('2008759662').should('have.value','2008759662')
        cy.wait(2000)
        cy.get('#listing-page-cart > div.wt-mb-xs-6.wt-mb-lg-0 > div:nth-child(1) > div.wt-display-flex-xs.wt-flex-direction-column-xs.wt-flex-wrap.wt-flex-direction-row-md.wt-flex-direction-column-lg > div > form > div').click()
        cy.wait(2000)
        cy.get('.wt-display-flex-xs > :nth-child(1) > .wt-text-heading-01').should('include.text','item in your basket')


    }

}

export default addingitem