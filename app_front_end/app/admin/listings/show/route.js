import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return this.store.find('listing',params.listing_id);
	},

	actions:{
		close:function()
		{
			this.transitionTo('admin.listings');

			return false;
		}
	}	

});
