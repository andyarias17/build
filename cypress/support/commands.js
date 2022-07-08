import headerPage from "../pages/commons/header-page"
import dashboardPage from "../pages/dashboard-page"
import loginPage from "../pages/login-page"
import signupPage from "../pages/signup-page"

Cypress.Commands.add('signUp', (userData, randomNum) => {
    headerPage.clickSignUp()
    signupPage.fillName(userData.name)
    signupPage.fillLastName(userData.lastName)
    signupPage.fillPhone(userData.phone)
    signupPage.fillEmail(`${userData.name}_${userData.lastName}_${randomNum}@builto.io`)
    signupPage.fillPassword(`${userData.password}`)
    signupPage.clickSignUp()
    signupPage.elements.successMsg().should('contain.text', 'Signup successfull please login.')
})

Cypress.Commands.add('login', (userData, randomNum) => {
    headerPage.clickLogin()
    loginPage.fillEmail(`${userData.name}_${userData.lastName}_${randomNum}@builto.io`)
    loginPage.fillPassword(`${userData.password}`)
    loginPage.clickLoginBtn()

    //Assertions    
    dashboardPage.elements.welcomeUsername().should('have.text', userData.name)
    dashboardPage.elements.welcomeMsg().should('have.text', `Hi, ${userData.name} Welcome Back`)
    dashboardPage.elements.leftMenuOptions().its('length').should('equal', 5)
    dashboardPage.elements.logoutLink().should('be.visible')
})

