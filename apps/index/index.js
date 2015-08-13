var path = require('path');
var markoa = require('marooka')
var components = markoa.components;
var componentsPath = path.join(__dirname, 'components')

function prepareApp() {
  var appName = 'index';
  var appPath = path.join(__dirname, 'page');
  var page = path.join(appPath, appName + '.marko');

  var globalComponentsPath = path.resolve(path.join(__dirname, '../', '_global', 'components'));
  var widgetMapLocations = {
    globalPath: globalComponentsPath,
    localPath: path.join(__dirname, 'components')
  };

  var parse = components.tagParser(widgetMapLocations);
  parse(page, function(registry) {
    var widgetsFilePath = path.join(appPath, 'widgets.json');
    var widgets = [];
    for(var key in registry) {
        widgets.push(registry[key]);
    }
    // var widgetsObj = {
    //   widgets: widgets || []
    // }

    function createBrowserFile() {
      markoa.lasso.widgets.merge(appPath, appName)
    }
    components.writer.toJsonFile(widgetsFilePath, widgets, createBrowserFile);
  })
}


components.categorizer(componentsPath, function(finder) {
  var comps = finder();
  var compsListPath = path.join(componentsPath, 'components-map.json');
  components.writer.toJsonFile(compsListPath, comps, prepareApp);
});
