import Ember from 'ember';

export default Ember.Component.extend({

	selectedClass: Ember.computed('selectedItem',function()
	{
		
			var selectedItem = this.get('selectedItem');

			if(!selectedItem) return '';

			return 'selected';
			

	})

});
