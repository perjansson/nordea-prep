describe('Customers List Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/customers')
    })

    it('has correct header', () => {
        cy.get('header').should('contain', 'customers list page')
    })

    it('has at least a few customers in list', () => {
        cy
            .get('[data-test-name="customer-list"]')
            .find('div')
            .its('length')
            .should('be.gt', 10)
    })
})
