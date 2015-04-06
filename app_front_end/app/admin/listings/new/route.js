import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return Ember.RSVP.hash({
			listing: this.store.createRecord('listing'),
			locations: this.store.find('location'),
		});
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
