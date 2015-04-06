import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  placeholder : 'search...',

  query:'',

  actions:{

  	search:function()
  	{
  		this.sendAction('search',this.get('query'));
  	},

  },

});
