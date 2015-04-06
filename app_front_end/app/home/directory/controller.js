import Ember from 'ember';

export default Ember.Controller.extend({


	// listingSet: [],

	// filteredListings: Ember.computed('listingQuery',function(){

	// 	var listingQuery = this.get('listingQuery');

	// 	var query = new RegExp(listingQuery,'i');

	// 	var listings = this.get('model');

	// 	var filtered = listings
	// 		.sortBy(this.sortBy)
	// 		.filter(function(item){
	// 			if(!listingQuery) return true;

	// 			var dn = item.get('displayName');
				
	// 			var company = item.get('company');

	// 			if( query.test(dn) || query.test(company)) return true;
	// 		});

	// 	if(filtered == this.get('listingSet')) return this.get('listingSet');

	// 	this.set('listingSet',filtered)
		
	// 	return filtered;
	// }),

	// init:function(){
	// 	this._super();
	// 	this.filterListings;
	// },
	filteredListings: function(){

		var listingQuery = this.get('listingQuery');

		var query = new RegExp(listingQuery,'i');

		var original = this.get('model');

		var filtered = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin,{
			
			content: this.get('model'),
			sortProperties:this.sortBy,
			sortAscending: this.get('sortAscending'),

		}).filter(function(item){
			if(!listingQuery) return true;

			var dn = item.get('displayName');
			
			var company = item.get('company');

			if( query.test(dn) || query.test(company)) return true;
		});

		
		// if(original.get('length') == filtered.length) return filtered

		return filtered; 

	}.property('listingQuery'),

	sortAscending:true,
	sortBy:['lastName','Company'],
	listingQuery:'',

	baseMap: function()
	{
		if(this.kiosk === 2)
		{
			return 'http://www.fillmurray.com/200/200';
		}

		return '/img/maps/default.png';
	
	}.property('kiosk'),

	routeMap: '',

	queryParams: ['kiosk'],

	kiosk: 1,

	selectedItem :null,

	actions:{
		
		
		openKeyboard: function()
		{
			this.transitionToRoute('home.directory');
			this.set('keyboardIsOpen', true);
			return false;
		},

		closeKeyboard: function(){
			this.set('listingQuery','');
			this.set('keyboardIsOpen',false);
		},

		
		selectListing:function(listing)
		{

			this.transitionToRoute('home.directory.listing',listing.get('id'));
			return false;
		},
	
	
	}

});
