import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service('session'),

	actions:{
		login:function()
		{
			var session = this.get('session');
			var email = this.get('email');
			var password = this.get('password');

			session.signin(email, password).then( ()=>
			{
				this.transitionToRoute('admin');
			})
			.catch( (error)=>
			{
				alert(error);
			});
		},
	}
});
