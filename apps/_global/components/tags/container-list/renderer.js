var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.label = input.label || 'Unknown list';
  template.render(input, out);
};
