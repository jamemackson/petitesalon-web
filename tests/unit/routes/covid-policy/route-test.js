import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | covid-policy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:covid-policy');
    assert.ok(route);
  });
});
