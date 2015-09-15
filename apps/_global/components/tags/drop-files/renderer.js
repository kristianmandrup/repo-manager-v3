var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.name = input.name || 'files';
  console.log('drop-images', input);
  template.render(input, out);
};
