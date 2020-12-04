describe('Homepage', () => {
  it('should display three social media icons', () => {
    cy.visit('http://localhost:3000');
    cy.getElement('header-socials').children().should('have.length', 3);
  });
});
