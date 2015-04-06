import Ember from 'ember';

export default Ember.Controller.extend({

	kiosks: function()
	{
		return ['1'];
	}.property(),

	init:function()
	{
		this._super();
		Ember.$('#initial-container').remove();
	}
});
