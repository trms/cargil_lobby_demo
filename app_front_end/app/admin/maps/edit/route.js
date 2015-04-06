import Ember from 'ember';

export default Ember.Route.extend({

	model:function(params)
	{
		return this.store.find('map',{location:params.location});
	},

	activate: function()
	{	
		this._super();
		window.scrollTo(0,0);
	},

	actions:{
		deleteSingle:function(model)
		{
			model.destroyRecord();
		},

	}
});
