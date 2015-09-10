var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('edit-item', input);
  template.render(input, out);
};
