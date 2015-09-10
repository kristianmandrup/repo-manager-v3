var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('multi-selector', input);
  input.refList = input.refList || [];
  var refs = input.refList.map(function (item) {
    return item.value;
  })
  input.selectOpts = input.refList.map(function(item) {
    console.log('item', item);
    var option = item;
    option.isSelected = refs.indexOf(item) >= 0;
    return option;
  });

  console.log('multi-selector ready', input);
  template.render(input, out);
};
