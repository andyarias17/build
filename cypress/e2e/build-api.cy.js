import testdata from '../fixtures/apidata.json'
import endpoints from '../fixtures/endpoints.json'

describe('Build API - Code Challenge', () => {


  beforeEach(() => {

  })

  let idsCreated = []
  let putObject = {
    "FirstName": "Andy Updated",
    "LastName": "Arias Updated"
  }

  it('#1 - Create 5 Registers', function () {
    testdata.forEach(($el, index) => {
      cy.request({
        method: 'POST',
        url: endpoints.url + endpoints.users,
        body: $el
      }).should(response => {
        expect(response.headers['content-type']).to.include('application/json')
        expect(response.status).to.equal(201)
        expect(response.statusText).to.equal('Created')
        expect(response.body).to.have.any.keys('id')
        idsCreated.push(response.body.id)
      })
    })
  })

  it('#2 - Update First Register', function () {

    cy.request({
      method: 'PUT',
      url: endpoints.url + endpoints.users + "/" + idsCreated[0],
      body: putObject
    }).should(response => {
      expect(response.headers['content-type']).to.include('application/json')
      expect(response.status).to.equal(200)
      expect(response.body.FirstName).to.equal(putObject.FirstName)
      expect(response.body.LastName).to.equal(putObject.LastName)
    })
  })

  it('#3 - Remove 2 Last registers', function () {
    console.log()
    let idsToDelete = [idsCreated[3], idsCreated[4]]

    idsToDelete.forEach(($id, index) => {
      cy.request({
        method: 'DELETE',
        url: endpoints.url + endpoints.users + "/" + $id
      }).should(response => {
        console.log(response)
        expect(response.status).to.equal(204)
        expect(response.body).to.be.empty
        //It reponse an empty body
      })
    })

  })

  it('#4 - get All Information', function () {
    console.log(idsCreated)
    idsCreated.forEach(($id, index) => {
      cy.request({
        method: 'GET',
        url: endpoints.url + endpoints.users + "/" + $id,
        failOnStatusCode: false
      }).then(response => {
        console.log(response)

        //It reponse an empty body
      })
    })

  })
})