import DS from 'ember-data';

import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  
  	validations:{
  		image:{
  			presence:{
  				message:'(an image is required)',
  			},
  		}
  	},
  	
	location: DS.attr(),
	image: DS.attr(),
	kiosk: DS.attr(),

});

