import Ember from 'ember';

export default Ember.Route.extend({

	session: Ember.inject.service('session'),

	beforeModel: function()
	{
		var session = this.get('session');

		session.signin().then( ()=>
		{
			this.transitionTo('admin');
		})
		.catch( (error)=>
		{
			//handle error
		});
	},
});
