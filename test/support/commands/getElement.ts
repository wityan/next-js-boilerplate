Cypress.Commands.add('getElement', (id, options) =>
  cy.get(`[data-cy=${id}]`, {
    timeout: 5000,
    ...options,
  })
);
