var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.image = input.image || 'http://lorempixel.com/200/200/sports/';  
  template.render(input, out);
};
