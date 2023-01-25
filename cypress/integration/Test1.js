/// <reference types="Cypress" />
import register from '../../PageObject/register'


describe('Registering New User', function()
{
    it('Opening URL successfully',function () {

        const hp = new register()
        hp.visit()
    })

    it('Clicking on Sign in button', function(){

        const hp = new register()
        hp.signinbutton()
    })

    it ('Clicking on Register button', function(){

        const hp = new register()
        hp.registerbutton()
    })

    it ('Enter Email for registration', function(){

        const hp = new register()
        hp.emailaddress()
    })

    it ('Enter First Name', function(){

        const hp = new register()
        hp.namefirst()
    })

    it ('Enter Password for registeration', function(){

        const we = new register()
        we.regpasswd()
    })

    it('User clicks on Registeration button', function(){

        const hp = new register()
        hp.regbutton()
    })

}   )