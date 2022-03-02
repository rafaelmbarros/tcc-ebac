// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'addProdutoCarrinho',
  ({ produto, quantidade, tamanho, cor }) => {
    cy.visit('/produtos');
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
  }
);

Cypress.Commands.add('getCoupons', () => {
  cy.request({
    method: 'GET',
    url: 'wc/v3/coupons',
    headers: {
      authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
    },
  }).should((response) => {
    cy.log(response);
    expect(response.status).to.equal(200);
  });
});

Cypress.Commands.add('getCoupon', (id) => {
  cy.request({
    method: 'GET',
    url: `wc/v3/coupons/${id}`,
    headers: {
      authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
    },
  }).should((response) => {
    cy.log(response);
    expect(response.status).to.equal(200);
  });
});

Cypress.Commands.add(
  'addCoupon',
  (code, amount, discount_type, description) => {
    cy.request({
      method: 'POST',
      url: `wc/v3/coupons`,
      headers: {
        authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
      },
      body: {
        code: code,
        amount: amount,
        discount_type: discount_type,
        description: description,
      },
    }).should((response) => {
      cy.log(response);
      expect(response.status).to.equal(201);
    });
  }
);
