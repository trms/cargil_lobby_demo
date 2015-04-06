import Ember from 'ember';

export default Ember.Route.extend({

	model: function()
	{
		return this.store.createRecord('user');
	},

	actions:{

		willTransition: function(transition)
		{
			if(this.currentModel.get('isDirty'))
			{
				if(confirm('Do you want to save your changes?'))
				{
					if(!this.currentModel.get('isValid'))
					{
						alert('you have invalid inputs')
						transition.abort();
					}
					else
					{
						this.currentModel.save();
					}
				}
				else
				{
					this.currentModel.rollback();
				}

			}
		}
	},

});
