describe('Audio Player', () => {
  it('plays audion', () => {
    cy.visit('/')
    cy.get('.composition-name:first').click()
    cy.wait(1000)
    cy.get('#play-btn').click()
    cy.wait(5000)
    cy.get('#player-play-btn').click()
  })
})
