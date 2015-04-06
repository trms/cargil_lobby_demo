import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function()
	{
		Ember.$('a').mousedown(function(e){return false});
		window.Draggable.create('.listings',{type:'scrollTop',edgeResistance:.7 ,throwProps:true})
	}
});
