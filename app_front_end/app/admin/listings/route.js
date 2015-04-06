import Ember from 'ember';

export default Ember.Route.extend({

	model:function()
	{	
		return this.store.find('listing');
	},


	actions:
	{
		save:function(model)
		{
			if(model.get('isValid'))
			{
				model.save().then( ()=>{
					this.transitionTo('admin.listings.show',model);
				},function(){
					alert('something went wrong');
				});
			}

			return false;
		},

		delete: function(listing)
		{
			listing.destroyRecord();
			this.transitionTo('admin.listings');
			return false;
		},

		
		search:function(query)
		{

			this.store.find('listing',{query:query}).then( (listings)=>
			{
				this.controller.set('model',listings);
			});
			
		}
	}
});