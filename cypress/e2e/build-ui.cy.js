describe('Build UI - Code Challenge', () => {

  before(() => {

    cy.fixture('userData.json').as('myData')
  })

  beforeEach(() => {
    cy.visit('/')
    cy.wrap(Math.floor(Math.random() * 101)).as('randomNum')
  })

  beforeEach

  it('#1 - SignUp', function () {    
    cy.signUp(this.myData, this.randomNum)
  })

  it('#2 - Login', function () {
    //Considering that those are independent tcs, we do a new signup
    cy.signUp(this.myData, this.randomNum) 
    
    cy.login(this.myData, this.randomNum)
  })
})