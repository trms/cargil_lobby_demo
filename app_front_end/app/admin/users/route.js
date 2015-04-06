import Ember from 'ember';

export default Ember.Route.extend({

	model:function()
	{
		return this.store.find('user');
	},

	actions:
	{
		save:function(model)
		{
		// console.log(model.get('isValid'))
		// console.log(model.get('nopassword'))
			if(model.get('isValid'))
			{
				model.save().then( ()=>{
					this.transitionTo('admin.users');
				},function(){
					alert('something went wrong');
				});
			}

			return false;
		},

		delete: function(user)
		{
			user.destroyRecord();

			return false;
		},

		search:function(query)
		{
			this.store.find('user',{name:query,email:query});
		},




	}
});
