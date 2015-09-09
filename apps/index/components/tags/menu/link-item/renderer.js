var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.active = input.item.label === out.menus.activeItem ? 'active' : '';
  template.render(input, out);
};
