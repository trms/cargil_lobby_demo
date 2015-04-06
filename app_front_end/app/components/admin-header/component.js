import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  title:'Section Title',

  newItemRoute: false,

  hasSearch: true,

  actions:{
  	search:function(query)
  	{
  		this.sendAction('search',query);
  	}
  }
});
