import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service('session'),

	user: function()
	{
		var ls = JSON.parse(localStorage.session);
		console.log(ls.user.name)
		console.log(this.get('session.email'));
		console.log(this.get('session.name'));
		return this.get('session.user');

	}.property('session.user'),

});
