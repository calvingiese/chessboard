describe('Chess App', () => {
  beforeEach(() => {
    cy.visit('')
  })

  describe('chessboard', () => {
    it('finds chessboard', () => {
      cy.get('#chessboard')
    })

    it('has correct amount of squares', () => {
      cy.get('#chessboard').find('[data-cy="square"]').should('have.length', 64)
    })
  })

  it('finds selection summary', () => {
    cy.get('#selection-summary')
  })

  it('default nav', () => {
    cy.visit('')

    cy.get('#nav').should('have.class', 'v-navigation-drawer--right')
  })

})
