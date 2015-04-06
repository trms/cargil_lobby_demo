import DS from 'ember-data';

import EmberValidations from 'ember-validations';

// import uniqueUser from 'app/validators/uniqueUser';

export default DS.Model.extend(EmberValidations.Mixin,{
  
  validations:{
  	passwordMatch:{
  		presence:{
  			message:'must match password',
  			unless:function(object, validator)
        {
          return object.get('passwordMatch');
        }
  		}
  	},
  	password:{
  		presence:{
  			message:'is required',
        unless:function(object, validator){
          return object.get('nopassword');
        }
  		}
  	},
  	email:{
  		presence:true,
  	},
  	name:{
  		presence:true,
  	}
  },

  name: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),

  password2:null,

  passwordMatch:function()
  {
  	if(this.get('password') === this.get('password2') && this.get('password'))
  	{
  		return true;
  	}

  	return '';
  }.property('password','password2'),
  
  nopassword:false,

});
