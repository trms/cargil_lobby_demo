import Ember from 'ember';

export default Ember.Route.extend({

	model: function()
	{
		return this.store.find('location')
		// return Ember.RSVP.hash({
		// 	// maps: this.store.find('map'),
		// 	locations: this.store.find('location'),
		// 	kiosks: this.controllerFor('application').get('kiosks'),
		// });
	},


	actions: {


		submitName: function(name, maps) {
			maps.forEach( (map)=>
			{
				map.set('location',name);
			});
		},

		save: function(maps) {
			
			var valid = true;

			maps.forEach( (map) => 
			{
				if(! map.get('isValid'))
				{
					console.log('not valid');
					valid = false;
				}
				
			});

			if(valid)
			{
				maps.forEach( (map) => 
				{
					console.log('save')
					console.log(map.get('image'))
					map.save();	
				});

				this.transitionTo('admin.maps');
				this.refresh();
				this.controllerFor('admin.maps.new').set('_newName','');
			}
		},

		delete: function(location)
		{	
			var loc = location.get('location');

			this.store.find('map',{location:loc}).then( (maps)=>
			{

				maps.forEach((map)=>
				{
					map.destroyRecord();

				});

				location.deleteRecord();
				this.transitionTo('admin.maps');
			});

			return false;
		},

		search:function(query)
		{
			this.store.find('location',{query:query}).then( (locations)=>
			{
				this.controller.set('model',locations);
			});
		}
	}


});
