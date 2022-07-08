class SignUpPage {
    elements = {
        fieldName: () => cy.get('[name="first_name"]'),
        fieldLastName: () => cy.get('[name="last_name"]'),
        fieldPhone: () => cy.get('[name="phone"]'),
        fieldEmail: () => cy.get('[name="email"]'),
        fieldPassword: () => cy.get('[name="password"]'),
        signUpBtn: () => cy.get('.contact-form-action button[type="submit"]'),
        successMsg: () => cy.get('.alert-success.signup')
    }

    fillName(name){
        this.elements.fieldName().type(name,{force:true})
    }

    fillLastName(lastName){
        this.elements.fieldLastName().type(lastName,{force:true})
    }

    fillPhone(phone){
        this.elements.fieldPhone().type(phone,{force:true})
    }

    fillEmail(email){
        this.elements.fieldEmail().type(email,{force:true})
    }

    fillPassword(password){
        this.elements.fieldPassword().type(password,{force:true})
    }

    clickSignUp(){
        this.elements.signUpBtn().click({force:true})
    }
}

export default new SignUpPage()