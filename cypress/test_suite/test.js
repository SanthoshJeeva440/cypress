/// <reference types="Cypress" />
import 'cypress-mochawesome-reporter/register';
const test_data = require("../fixtures/login_test_data.json")
const element = require("../../page_object/page_elements.json")
import { commands } from "../support/commands"
const pages = new commands();
describe('Login Hotel', () => {
    it('Enter username, Password & Click Login Button', () => {
        cy.visit(Cypress.env('CYPRESS_BASE_URL'));
        pages.enter_username(test_data.username)
        pages.enter_password(test_data.password)
        pages.click_login_button()
        cy.get(element.search_hotel_page.search_hotel_title).contains("Search Hotel ")
        cy.wait(1000);
    })

    it('logout app', () => {
        pages.click_logout_button()
        pages.clicl_again_login()

    })
    it('Enter Invalid Username, Password & Validate Error Message ', () => {
        for (let i = 0; i <= 5; i++) {
            const { internet } = require('faker');
            const email = internet.exampleEmail()
            const password = internet.password()
            pages.enter_username(email)
            pages.enter_password(password)
            pages.click_login_button()
            cy.document().then((doc) => {
                const itensCount = doc.querySelector('.auth_error>b').innerText
                expect(itensCount).to.equal('Invalid Login details or Your Password might have expired. Click here to reset your password'
                )
            })
        }

    })
    it('Enter username, Password & Click Login Button', () => {
        cy.visit(Cypress.env('CYPRESS_BASE_URL'));
        pages.enter_username(test_data.username)
        pages.enter_password(test_data.password)
        pages.click_login_button()
        cy.get(element.search_hotel_page.search_hotel_title).contains("Search Hotel ")
        cy.wait(1000);
    })
})