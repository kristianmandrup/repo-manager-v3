var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.image = input.image || 'http://lorempixel.com/200/200/sports/';
  input.remove = input.remove || 'Remove';
  input.title = input.title || input.name.humanize;
  template.render(input, out);
};
