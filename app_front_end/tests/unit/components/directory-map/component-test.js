import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('directory-map', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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


test('it has one image elements when routeMap has not been set',function(assert){

  var component = this.subject();

  var $component = this.append();

  assert.equal($component.find('.map').length, 1);

  assert.equal($component.find('img').length, 1);
});


test('it has two image elements when routeMap has been set',function(assert){

  var component = this.subject({routeMap:'an image'});

  var $component = this.append();

  assert.equal($component.find('.map').length, 2);
  
  assert.equal($component.find('img').length, 2);
});
