function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_list_icon_list_renderer_js = __renderer(require("marko-semantic-ui-taglibs/semantic/components/list/icon-list/renderer")),
      __tag = __helpers.t,
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_accordion_ui_accordion_renderer_js = __renderer(require("marko-semantic-ui-taglibs/semantic/components/accordion/ui-accordion/renderer")),
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_accordion_acc_block_renderer_js = __renderer(require("marko-semantic-ui-taglibs/semantic/components/accordion/acc-block/renderer")),
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<lasso-page' +
      attr("name", data.name) +
      ' package-path="./' +
      escapeXmlAttr(data.name) +
      '.browser.json"></lasso-page><!DOCTYPE html> <html><head><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">   </script><title>' +
      escapeXml(data.title) +
      '</title><lasso-head></lasso-head></head><body><h1>' +
      escapeXml(data.header) +
      ' </h1><h2>' +
      escapeXml(out.global.appName) +
      '</h2>');
    __tag(out,
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_list_icon_list_renderer_js,
      {
        "list": data.lists.users
      });
    __tag(out,
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_list_icon_list_renderer_js,
      {
        "list": out.global.lists.repos
      });
    __tag(out,
      _________node_modules_marko_semantic_ui_taglibs_semantic_components_accordion_ui_accordion_renderer_js,
      {},
      function(out) {
        __tag(out,
          _________node_modules_marko_semantic_ui_taglibs_semantic_components_accordion_acc_block_renderer_js,
          {
            "active": "true",
            "label": "Yeah",
            "text": "hello world"
          });
      });

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