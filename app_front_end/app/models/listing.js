import DS from 'ember-data';

import EmberValidations from 'ember-validations';


var Listing = DS.Model.extend(EmberValidations.Mixin,{


	validations:{
		displayName:{
			presence:{
				message:'is required',
			},
		},

		


	},


	

	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	company: DS.attr('string'),
	title: DS.attr('string'),
	location: DS.attr('string'),
	address: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string'),
	description: DS.attr('string'),
	image: DS.attr('string'),
	map: DS.attr('string'),

	

	hasImage: function(){
		return this.get('image').length > 0;
	}.property('image'),

	fullName: function(){

		var firstName = this.get('firstName')?this.get('firstName'):'';
		var lastName = this.get('lastName')?this.get('lastName'):'';
		var fullName = firstName + ' ' + lastName;
		return fullName.trim();

	}.property('firstName', 'lastName'),

	displayName: function(){
		var firstName = this.get('firstName')?this.get('firstName'):'';
		var lastName = this.get('lastName')?this.get('lastName'):'';
		var company = this.get('company')?this.get('company'):'';

		if(firstName || lastName) return firstName + ' ' + lastName;
		
		return company;

	}.property('firstName', 'lastName', 'company'),

});


export default Listing;