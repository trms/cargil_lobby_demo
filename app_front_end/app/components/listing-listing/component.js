import Ember from 'ember';


export default Ember.Component.extend( {


	classNameBindings:['isSelected:open','isHeader:listing-header'],

	classNames:['listing'],

	attributeBindings:['data-liquid-id'],

	'data-liquid-id': function()
	{
		return this.get('model.id');

	}.property('this.model'),

	isHeader: false,

	actions:{
		selectListing:function(listing)
		{
			this.sendAction('selectListing', listing);
		},
	}
	
	
});
