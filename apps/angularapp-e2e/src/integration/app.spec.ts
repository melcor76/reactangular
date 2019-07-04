import { getGreeting } from '../support/app.po';

describe('angularapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angularapp!');
  });
});
