import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | /online-booking/saint-paul', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:/online-booking/saint-paul');
    assert.ok(route);
  });
});
