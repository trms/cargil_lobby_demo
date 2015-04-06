import Ember from 'ember';
import layout from './template';

import EmberLoader from 'ember-uploader/uploader';

import FileField from 'ember-uploader/file-field';

export default FileField.extend({
  layout: layout,

  classNames:['form-control','ember-view','ember-text-field'],

  url:'',

  modelId: '',

  model:false,

  filesDidChange: function()
  {
  	var uploadUrl = this.get('url');
  	var files = this.get('files');

  	var model = this.get('model');
  	

  	var uploader = EmberLoader.create({
  		url: uploadUrl,
  	});

  	if(!Ember.isEmpty(files)){
  		var promise = uploader.upload(files[0]);

      promise.then( (imageUrl)=> {
        
        model.set('image',imageUrl);
        this.sendAction('newModel', model);

      }, function(error){
        alert('that file could not be processed');
      });
  	}

  }.observes('files'),

});
