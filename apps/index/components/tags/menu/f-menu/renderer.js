var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('follow menu', input);
  template.render(input, out);
};
