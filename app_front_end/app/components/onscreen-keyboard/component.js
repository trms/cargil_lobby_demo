import Ember from 'ember';
import layout from './template';



export default Ember.Component.extend({
  layout: layout,

  classNames: ['keyboard-container'],

  classNameBindings: ['open'],

  didInsertElement: function(){

  	Ember.$('.keyboard-input').keyboard( this.get('keyboardOptions') );

  	this.set('keyboard', Ember.$('.keyboard-input').getkeyboard() );
		
  },

  willDestroyElement: function(){
    Ember.$('.keyboard-input').getkeyboard().destroy();
  },


  actions:{
  	closeKeyboard:function()
  	{
  		this.set('open', false);
  	},
  },

  keyboardOptions:
  {
    initialFocus:false,
    
  	alwaysOpen:true,

  	usePreview:false,

  	layout:'custom',

  	customLayout:
  	{
  		'default': 
  		[
  			'1 2 3 4 5 6 7 8 9 0',
  			'Q W E R T Y U I O P',
  			"A S D F G H J K L '",
  			'Z X C V B N M , .',
  			'{clear} {space} {bksp}',
  		]
  	},

  	change: function(event, keyboard, el)
  	{
  		keyboard.accept();
  	},

 
 	appendTo: '.keyboard-anchor',

  	position:{
  		of: '.keyboard-anchor',
  		my:'center center',
  		at: 'center center',
  	}
  },

  

});











