function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_list_icon_list_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/list/icon-list/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_accordion_ui_accordion_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/accordion/ui-accordion/renderer")),
      ____________semantic_tags_semantic_components_accordion_acc_block_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/accordion/acc-block/renderer")),
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
      ____________semantic_tags_semantic_components_list_icon_list_renderer_js,
      {
        "list": data.lists.users
      });
    __tag(out,
      ____________semantic_tags_semantic_components_list_icon_list_renderer_js,
      {
        "list": out.global.lists.repos
      });
    __tag(out,
      ____________semantic_tags_semantic_components_accordion_ui_accordion_renderer_js,
      {
        "inverted": true,
        "ui": "styled"
      },
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_accordion_acc_block_renderer_js,
          {
            "active": "true",
            "label": "tab1"
          },
          function(out) {
            out.w('Page 1');
          });
        __tag(out,
          ____________semantic_tags_semantic_components_accordion_acc_block_renderer_js,
          {
            "label": "tab2"
          },
          function(out) {
            out.w('OMG! I\'m the body of an accordion');
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