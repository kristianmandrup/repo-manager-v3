function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___icon_list_item_renderer_js = __renderer(require("../icon-list-item/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<h1>LIST</h1><div class="ui list">');

    forEach(data.items, function(item) {
      __tag(out,
        ___icon_list_item_renderer_js,
        {
          "size": item.size,
          "color": item.color,
          "icon": item.icon,
          "align": item.align,
          "desc": item.desc,
          "label": item.label
        },
        function(out) {
          out.w(' <div class="description"> </div>');
        });
    });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);