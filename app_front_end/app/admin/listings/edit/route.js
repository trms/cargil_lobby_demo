import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return Ember.RSVP.hash({
			listing: this.store.find('listing',params.listing_id),
			locations: this.store.find('location')
		});
	},

	activate: function()
	{
		this._super();
		window.scrollTo(0,0);
	},

	actions:{

		willTransition: function(transition)
		{
			if(this.currentModel.listing.get('isDirty'))
			{
				if(confirm('Do you want to save your changes?'))
				{
					if(!this.currentModel.listing.get('isValid'))
					{
						alert('you have invalid inputs')
						transition.abort();
					}
					else
					{
						this.currentModel.listing.save();
					}
				}
				else
				{
					this.currentModel.listing.rollback();
				}

			}
		}
	},

	

});
