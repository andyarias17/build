class HeaderPage {
    elements = {
        signUpBtn: () => cy.get('.header-top-content a.theme-btn').contains('Signup'),
        loginBtn: () => cy.get('.header-top-content a.theme-btn').contains('Login')
    }

    clickLogin(){
        this.elements.loginBtn().click({force:true})
    }

    clickSignUp(){
        this.elements.signUpBtn().click({force:true})
    }
}

export default new HeaderPage()