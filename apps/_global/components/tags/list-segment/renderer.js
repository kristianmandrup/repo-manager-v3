var template = require('./template.marko');
var extend = require('extend');

exports.renderer = function(input, out) {
  var search = {
    ui: 'green',
    label: 'Add to',
    icon: 'list'
  }
  input.search = extend(search, input.search);

  console.log('list-segment', input);
  template.render(input, out);
};
