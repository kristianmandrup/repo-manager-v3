var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('multi-selector', input);
  template.render(input, out);
};
