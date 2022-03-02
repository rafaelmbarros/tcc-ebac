/// <reference types="cypress" />

const couponsFixtures = require('../../fixtures/coupons.json');

context('Coupons', () => {
  beforeEach(() => {
    Cypress.config('baseUrl', 'http://lojaebac.ebaconline.art.br/wp-json');
  });

  it('Listar todos os cupons', async () => {
    cy.getCoupons();
  });

  it('Listar um cupom só pelo id', async () => {
    cy.getCoupon(5218);
  });

  it('Adicionar novos cupons', async () => {
    const code = (Math.random() + 1).toString().substring(2);
    const coupon = couponsFixtures[0];
    await cy.addCoupon(
      code,
      coupon.amount,
      coupon.discount_type,
      coupon.description
    );
  });
});
