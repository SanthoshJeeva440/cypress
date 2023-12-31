const element = require("../../page_object/page_elements.json")
export class commands{
    
    enter_username(username){
        cy.get(element.login_page.username).type(username)
    }

    enter_password(password){
        cy.get(element.login_page.password).type(password)
    }

    click_login_button(){
        cy.get(element.login_page.login_button).click()
    }
    click_logout_button(){
        cy.get(element.search_hotel_page.logout_button).click()
    }
    clicl_again_login(){
        cy.get(element.login_page.again_login).click()
    }
}
