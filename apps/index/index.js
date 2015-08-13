var path = require('path');
var Components = require('marooka/components');

var componentsPath = path.join(__dirname + './components')
var components = new Components(componentsPath, function(finder) {
  var widgets = finder('tags');
  console.log('tags', tags);
});
