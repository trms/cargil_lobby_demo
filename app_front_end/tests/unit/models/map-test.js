import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';


moduleForModel('map', {
  // Specify the other units that are required for this test.
  needs: ['model:listing'],
});


test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});


