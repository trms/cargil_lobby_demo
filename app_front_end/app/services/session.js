import Ember from 'ember';

var $ = Ember.$;

export default Ember.Service.extend(Ember.Evented,{

	isAuthenticated: false,
	user: null,
	token: null,


	store: Ember.inject.service(),


	init: function(){
		window.addEventListener('storage', Ember.run.bind(this, this.storageChanged));
	},

	storageChanged: function(event)
	{
		if(event.key === 'session')
		{
			this.trigger('change',event.key, event.newValue);
		}
	},


	signin: function(email, password)
	{
		
		if(arguments.length === 2)
		{
			return this.authWithCredentials(email, password);
		}

		return this.authExisting();
	},

	signout: function()
	{
		this.setProperties({
			isAuthenticated:false,
			user:null,
			token:null,
		});

		localStorage.removeItem('session');
	},

	authWithCredentials: function(email, password)
	{

		var credentials = {
			email:email,
			password:password,
		};

		var store = this.get('store');

		return new Ember.RSVP.Promise( (resolve, reject )=>
		{
			$.ajax({
				
				type: 'POST',
				dataType: 'json',
				url: '/api/auth',
				data:credentials,

			})
			.then( (response)=>
			{
				
				localStorage.sessionValidity = Date.now() + 86400000;
				
				localStorage.session = JSON.stringify(response);
				


				this.setProperties({
					token: response.token,
					user: response.user,
					isAuthenticated: true,
				});

				resolve();

			})
			.fail( (reason)=>
			{
				Ember.run( ()=>
				{
					reject(reason.responseText);
				});
			});
		
		});
	},

	authExisting: function()
	{
		var store = this.get('store');

		
		return new Ember.RSVP.Promise( (resolve, reject)=>
		{
			if(localStorage.session && localStorage.sessionValidity > Date.now())
			{
				var session = JSON.parse(localStorage['session']);

				store.find('user',session.user.id).then( (user)=>
				{
					localStorage.sessionValidity = Date.now() + 86400000;
					this.setProperties({
						token: session.token,
						user: session.user,
						isAuthenticated: true,
					});

					resolve();

				}).catch( (reason)=>
				{	
					this.signout();
					reject(reason.responseJSON);
				});
				
				

			}

			else
			{
				reject();
			}

		});
	},








});
