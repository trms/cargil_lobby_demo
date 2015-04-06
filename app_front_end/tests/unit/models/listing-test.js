import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';



var listing;

moduleForModel('listing', {
  // Specify the other units that are required for this test.
  
  needs: ['model:map'],
  
  setup: function()
  {
  	var store = this.store();
  	Ember.run(function(){
  		listing = store.createRecord('listing',{'firstName':'Woody','lastName':'Wiedenhoeft','title':'Executive Director','location':'119','image':''});
  	});
  },

});


test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
  assert.ok(model instanceof DS.Model);
});

test('full name computes as expected',function(assert){

	assert.equal(listing.get('fullName'), 'Woody Wiedenhoeft' );

});

test('hasImage is false if there is an empty string in image', function(assert){

	assert.ok(!listing.get('hasImage'));
});

test('hasImage is true if there is a string in image', function(assert){

	Ember.run(function(){
		listing.set('image','myimage.jpg');
		assert.ok(listing.get('hasImage'));
	});

});


