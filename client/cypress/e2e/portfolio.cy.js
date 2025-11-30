describe('Portfolio home page', () => {
  it('loads and shows Home text', () => {
    cy.visit('http://localhost:3000/DipakPortfolio');
    cy.contains(/home/i).should('exist');
  });
});
