var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.label = input.label || 'Unknown list';
  console.log('container-list', input);
  template.render(input, out);
};
