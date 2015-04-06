import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting index reroutes to directory', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'home.directory.index');
    assert.equal(currentRouteName(),'home.directory.index');
    assert.equal(currentURL(),'/home/directory');
  });
});
