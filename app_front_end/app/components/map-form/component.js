import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  

  actions:{
  	delete:function(model)
  	{
  		this.sendAction('delete',model);
  	},
  }
});
