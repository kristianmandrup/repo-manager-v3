function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_form_ui_form_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/ui-form/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_form_input_check_box_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/check-box/renderer")),
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<lasso-page' +
      attr("name", data.name) +
      ' package-path="./' +
      escapeXmlAttr(data.name) +
      '.browser.json"></lasso-page><!DOCTYPE html> <html><head><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">   </script><title>' +
      escapeXml(data.title) +
      '</title><lasso-head></lasso-head></head><body><h3>Sliders</h3>');
    __tag(out,
      ____________semantic_tags_semantic_components_form_ui_form_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_check_box_renderer_js,
          {
            "name": "male",
            "checked": true,
            "field": "Male",
            "type": "slider"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_check_box_renderer_js,
          {
            "name": "male",
            "checked": true,
            "field": "Male"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_check_box_renderer_js,
          {
            "name": "male",
            "checked": true,
            "field": "Male",
            "type": "toggle"
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