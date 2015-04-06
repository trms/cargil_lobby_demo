import Ember from 'ember';

export default Ember.Controller.extend({
	needs:'application',
	
	application: Ember.computed.alias('controllers.application'),

	_newName:function()
	{
		return this.model.get('firstObject.location');
		
	}.property(),


	_model: function()
	{
		var model = this.get('model');
		var location = this.get('model.firstObject.location');
		var kiosks = this.get('application.kiosks');

		
		if(model.get('length') < kiosks.length){
			var modelKiosks = [];

			model.forEach(function(map){
				modelKiosks.push(map.get('kiosk'));
			});

			var newKiosks = kiosks.filter(this.filterModel, modelKiosks);

			newKiosks.forEach( (newKiosk)=>
			{
				var map = this.store.createRecord('map');
				map.set('kiosk',newKiosk);
				map.set('location', location);
				this.get('model').pushObject(map);
			});
		}

		return model;

	}.property('this.model'),

	filterModel:function(item, index, kiosks)
	{
		return (this.indexOf(item) === -1)? true: false;	
	},

});
