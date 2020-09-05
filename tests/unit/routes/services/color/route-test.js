import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | services/color', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/color');
    assert.ok(route);
  });
});
