var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('ui-login', input);
  template.render(input, out);
};
