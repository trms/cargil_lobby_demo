import Ember from 'ember';


export default Ember.Route.extend({

	session: Ember.inject.service('session'),



	beforeModel: function()
	{

		var session = this.get('session');
		if(! session.get('isLoggedIn'))
		{
			session.signin().then( ()=>
			{
				
			})
			.catch( (error)=>
			{
				this.transitionTo('admin.login');
			});
		}


	},

	

	actions:{
		logOut:function(){
			var session = this.get('session');
			session.signout();
			this.transitionTo('admin.login');
		},

	},

	afterModel:function()
	{
		
	}
	

});
