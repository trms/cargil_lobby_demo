import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return this.createMaps();
	},

	createMaps: function(){
		var kiosks = this.controllerFor('application').get('kiosks');
		var maps = [];

		kiosks.forEach( (kiosk)=>{
			var map = this.store.createRecord('map');
			map.set('kiosk',kiosk);
			maps.push(map);
		});

		return maps;
	}

});
