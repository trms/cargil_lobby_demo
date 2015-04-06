import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  

  actions:{
  	save:function(model){
  		this.sendAction('save',model)
  	},

  	removeImage: function(model)
  	{
  		var imageUrl = model.get('image');

  		model.set('image','');

  	}
  }
});
