import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  actions:
  {
  	delete:function()
  	{
  		if( confirm('Are you sure, this action cannot be undone') )
  		{
  			this.sendAction('delete',this.model);
  		}
  	}
  }
});
