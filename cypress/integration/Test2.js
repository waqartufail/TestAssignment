/// <reference types="Cypress" />
// import firstusersignin from '../../PageObject/firstusersignin'
import firstsignin from '../../PageObject/firstsignin'


describe('First User Sign in', function()
{
    it('Opening URL successfully',function () {

        const hp = new firstsignin()
        hp.visit()
    })

    it('Clicking on Sign in button', function(){

        const we = new firstsignin()
        we.signinbutton()
    })

    it ('Enter email to login', function(){

        const hp = new firstsignin()
        hp.emailsignin()
        
    })

    it ('ENter the password to sign in', function(){

        const tmp = new firstsignin()
        tmp.passsignin()

    })

    it ('Click on Sign In button', function(){

        const tmp = new firstsignin()
        tmp.signinlogin()

    })


})