const assert = require('assert');
const app = require('../../src/app');

describe('\'promo_articles\' service', () => {
  it('registered the service', () => {
    const service = app.service('promo-articles');

    assert.ok(service, 'Registered the service');
  });
});
