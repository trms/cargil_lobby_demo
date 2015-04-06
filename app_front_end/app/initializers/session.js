export default {
  name: 'session',
  after: 'store',
  initialize: function(container, app)
  {
  	var store = container.lookup('store:main');
  	container.register('service:store', store, { instantiate: false });
  }

};
