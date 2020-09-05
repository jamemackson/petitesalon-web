import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | saint-paul', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:saint-paul');
    assert.ok(route);
  });
});
