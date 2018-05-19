describe('Start Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('can navigate to customers list page', () => {
        cy
            .get('footer')
            .find('a')
            .click({ force: true })

        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/customers')
        })
    })
})
