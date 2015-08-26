function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_button_ui_btn_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/button/ui-btn/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_button_submit_btn_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/button/submit-btn/renderer")),
      ____________semantic_tags_semantic_components_button_link_btn_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/button/link-btn/renderer")),
      ____________semantic_tags_semantic_components_button_icon_btn_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/button/icon-btn/renderer")),
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
      ____________semantic_tags_semantic_components_button_ui_btn_renderer_js,
      {
        "ui": "large red",
        "label": "warning"
      });
    __tag(out,
      ____________semantic_tags_semantic_components_button_submit_btn_renderer_js,
      {
        "ui": "large blue",
        "label": "go baby!"
      });
    __tag(out,
      ____________semantic_tags_semantic_components_button_link_btn_renderer_js,
      {
        "ui": "large violet",
        "label": "go baby!",
        "link": "google.com"
      });
    __tag(out,
      ____________semantic_tags_semantic_components_button_icon_btn_renderer_js,
      {
        "ui": "large green",
        "label": "go baby!",
        "name": "user"
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