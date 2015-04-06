import Ember from 'ember';

export default Ember.Controller.extend({

	newSlide: function()
	{
		return this.store.createRecord('slide');

	}.property(),


});
