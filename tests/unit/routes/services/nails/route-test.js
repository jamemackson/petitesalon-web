import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | services/nails', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/nails');
    assert.ok(route);
  });
});
