import {
  moduleFor,
  test
} from 'ember-qunit';

// import ApplicationRouteMixin from '../../simple-auth/mixins/application-route-mixin';


moduleFor('route:admin', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
