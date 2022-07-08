class LoginPage {
    elements = {
        fieldEmail: () => cy.get('.contact-form-action [name="email"]'),
        fieldPassword: () => cy.get('.contact-form-action [name="password"]'),
        loginBtn: () => cy.get('.contact-form-action button[type="submit"]')
    }


    fillEmail(email){
        this.elements.fieldEmail().type(email,{force:true})
    }

    fillPassword(password){
        this.elements.fieldPassword().type(password,{force:true})
    }

    clickLoginBtn(){
        this.elements.loginBtn().click({force:true})
    }
}

export default new LoginPage()