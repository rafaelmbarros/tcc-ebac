/// <reference types="cypress" />

const produtosFixtures = require('../../fixtures/produtos.json');

context('Adicionar item ao carrinho ', () => {
  beforeEach(() => {
    Cypress.config('baseUrl', 'http://lojaebac.ebaconline.art.br');
    cy.visit('/');
  });

  it('Deve adicionar pelo menos 3 produtos diferentes e validar se os itens foram adicionados com sucesso.', () => {
    produtosFixtures.forEach((produto) => {
      cy.addProdutoCarrinho({ ...produto, quantidade: 1 });
    });

    cy.visit('/carrinho/');

    produtosFixtures.forEach((produto, index) => {
      cy.get('.cart_item')
        .eq(index)
        .find('td')
        .eq(1)
        .should('contain', produto.produto);
    });
  });
});
