/// <reference types="Cypress" />
// import firstusersignin from '../../PageObject/firstusersignin'
import addingitem from '../../PageObject/addingitem'


describe('First User Sign in', function()
{
    it('Opening URL successfully',function () {

        const hp = new addingitem()
        hp.visit()
    })

    it('Clicking on Item to add to cart', function(){

        const we = new addingitem()
        we.clickitem()
    })



})