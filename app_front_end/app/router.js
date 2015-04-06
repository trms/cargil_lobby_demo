import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route('home',function(){

    this.route('slideshow');
    
    this.route('directory',function(){
        this.route('listing',{path: 'listing/:listing_id'});
    });
    
  });



  this.route('admin', function(){
    this.route('listings',{path:'/listings'}, function() {
      this.route('edit',{path:'/edit/:listing_id'});
      this.route('new');
      this.route('show',{path:'/:listing_id'});
    });

    this.route('backup',function(){
      this.route('new');
    });
    
    this.route('slides', function() {
      this.route('new');
    });
    
    this.route('users', function() {
      this.route('edit', {path:'/:user_id'});
      this.route('new');
    });

    this.route('maps', function() {
      this.route('edit',{path:':location'});
      this.route('new');
    });
    
    this.route('login');
  });

});

export default Router;
