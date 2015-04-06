import Ember from 'ember';

export default Ember.Route.extend({

	model:function()
	{
		return this.store.find('slide');
	},

	actions:{

		save:function(newModel)
		{
			var title = this.controller.get('slideTitle');
			
			newModel.set('title',title);
			
			newModel.save();
						
			// this.controller.refresh();

			this.controller.set('slideTitle','');

			return false
		},

		delete: function(model)
		{
			model.destroyRecord();

			this.refresh();

			return false;
		},

		willTransition: function()
		{
			//destroy unsaved records
		}
	},

});
