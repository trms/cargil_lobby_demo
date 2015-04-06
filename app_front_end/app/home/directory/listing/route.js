import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return this.store.find('listing',params.listing_id);
	},

	deactivate:function()
	{
		var baseMap = this.controllerFor('home.directory').get('baseMap');
		this.controllerFor('home.directory').set('selectedItem',null);
		// this.controllerFor('home.directory').set('routeMap', baseMap);
	},

	afterModel: function(listing)
	{
		var _this = this;

		this.controllerFor('home.directory').set('selectedItem', null);
		
		Ember.run.later(function(){
			_this.controllerFor('home.directory').set('selectedItem', listing);
			_this.controllerFor('home.directory').set('routeMap',listing.get('map'));
		},500);

		this.controllerFor('home.directory').set('keyboardIsOpen',false);
	}


});
