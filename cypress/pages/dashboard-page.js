class DashboardPage {
    elements = {
        welcomeUsername: () => cy.get('h4 strong'),
        welcomeMsg: () => cy.get('.breadcrumb-content .section-heading h2'),
        leftMenuOptions: () => cy.get('.sidebar-menu.list-items li a'),
        logoutLink:() => cy.get('.sidebar-menu.list-items li').last()
    }

    clickLogout(){
        this.elements.logoutLink().click()
    }
}

export default new DashboardPage()