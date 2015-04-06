import {
  moduleForComponent,
  moduleForModel,
  test,
} from 'ember-qunit';

// import Ember from 'ember';
// import startApp from '../../../helpers/start-app';

var App;

moduleForComponent('listing-listing', {
  // specify the other units that are required for this test
  needs: ['model:listing'],

  // setup: function()
  // {
  //   App = startApp();
  // },

  // teardown: function()
  // {
  //   Ember.run(App, 'destroy');
  // }

});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('if isHeader is true, only a header is rendered', function(assert){

  assert.expect(2);

  var component = this.subject({
    isHeader:true,
  });

  var $component = this.append();

  assert.equal($component.find('.listing-header').length,1);

  assert.equal($component.find('.listing').length,0);

});

test('if selectedItem is the same object as the components listing the listing will be open and have a close button', function(assert){

  assert.expect(2);

  var listing = Ember.ObjectProxy.create({name:'Sally'});

  var component = this.subject({
    listing : listing
  });

  var $component = this.append();

  Ember.run(function(){
    component.set('selectedItem',listing);
  });

  // assert.equal($component.find('.listing').length, 1);
  assert.equal($component.find('.listing.open').length, 1);
  assert.equal($component.find('.close').length, 1);


});


test('if selectedItem does not match, then the listing will be in a closed state', function(assert){

  assert.expect(3);

  var listing = Ember.ObjectProxy.create({name:'Sally'});
  var listing2 = Ember.ObjectProxy.create({name:'Charlie'});

  var component = this.subject({
    listing : listing
  });

  var $component = this.append();

  Ember.run(function(){
    component.set('selectedItem',listing2);
  });

  assert.equal($component.find('.listing').length, 1);
  assert.equal($component.find('.listing.open').length, 0);
  assert.equal($component.find('.close').length, 0);


});




test('Passes closeListing and selectListing actions up', function(assert){

  assert.expect(2);

  var component = this.subject();

  var target = {
    closeListing:function(){
      assert.ok('closeListing was sent');
    },

    selectListing:function(){
      assert.ok('selectListing was sent');
    }
  };

  component.set('closeListing','closeListing');

  component.set('selectListing','selectListing');

  component.set('targetObject', target);

  component.send('closeListing');

  component.send('selectListing');  
});


// test('Clicking the closed listing will trigger the selectListing action', function(assert){

//   var component = this.subject();

//   var target = {

//     clicked: false,

//     selectListing:function(){
//       this.clicked = true;
//     }
//   };

//   component.set('selectListing','selectListing');

//   component.set('targetObject', target);

//   var $component = this.append();

//   $component.click('.listing');

//   assert.ok(target.clicked);
   

// });






