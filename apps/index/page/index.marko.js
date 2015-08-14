function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      _______global_components_icon_list_renderer_js = __renderer(require("../../_global/components/icon-list/renderer")),
      __tag = __helpers.t,
      _______global_components_app_hello_template = __helpers.l(require.resolve("../../_global/components/app-hello/template")),
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="semantic.min.js">   </script><title>Title</title><lasso-head></lasso-head></head><body><h1>Repo Manager</h1>');
    __tag(out,
      _______global_components_icon_list_renderer_js,
      {
        "items": data.items
      });

    _______global_components_app_hello_template.render({"label": "Kris"}, out);

    out.w('<lasso-body></lasso-body>');
    __tag(out,
      _________node_modules_browser_refresh_taglib_refresh_tag_js,
      {
        "enabled": true
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);