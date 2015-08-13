var path = require('path');
var markoa = require('marooka')
var components = markoa.components;
var componentsPath = path.join(__dirname, 'components')

components.categorizer(componentsPath, function(finder) {
  var comps = finder();
  var compsListPath = path.join(componentsPath, 'components-map.json');
  components.writer.toJsonFile(compsListPath, comps, function() {
    // console.log('DONE');
  });
});
