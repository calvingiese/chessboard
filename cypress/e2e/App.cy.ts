describe('Chess App', () => {
  beforeEach(() => {
    cy.visit('')
  })

  describe('chessboard', () => {
    it('finds chessboard', () => {
      cy.get('#chessboard')
    })
  })
})
