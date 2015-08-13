var path = require('path');
var markoa = require('marooka')
var Components = markoa.Components;
var componentsPath = path.join(__dirname, 'components')

var components = new Components(componentsPath, function(finder) {
  var widgets = finder('widgets');
  var tags = finder('tags');
  console.log('widgets', widgets);
  console.log('tags', tags);
});

// var tags = components('tags');
