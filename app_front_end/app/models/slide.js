import DS from 'ember-data';

export default DS.Model.extend({
  
  	image: DS.attr(),
  	title: DS.attr(),
  	order: DS.attr(),
  	
});
