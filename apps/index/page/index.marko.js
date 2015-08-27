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
      ____________semantic_tags_semantic_components_form_input_line_input_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/line-input/renderer")),
      ____________semantic_tags_semantic_components_form_input_check_box_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/check-box/renderer")),
      ____________semantic_tags_semantic_components_form_input_drop_down_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/drop-down/renderer")),
      ____________semantic_tags_semantic_components_form_input_multi_select_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/multi-select/renderer")),
      ____________semantic_tags_semantic_components_form_input_radio_btn_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/radio-btn/renderer")),
      ____________semantic_tags_semantic_components_form_input_text_area_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/input/text-area/renderer")),
      ____________semantic_tags_semantic_components_form_field_ui_fields_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/field/ui-fields/renderer")),
      ____________semantic_tags_semantic_components_form_field_ui_field_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/form/field/ui-field/renderer")),
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
      '</h2><h3>Basic field</h3>');
    __tag(out,
      ____________semantic_tags_semantic_components_form_ui_form_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_line_input_renderer_js,
          {
            "name": "username",
            "field": "User name"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_check_box_renderer_js,
          {
            "name": "male",
            "checked": true,
            "field": "Male"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_drop_down_renderer_js,
          {
            "name": "coolSkills",
            "list": data.skills,
            "field": "Skills"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_multi_select_renderer_js,
          {
            "name": "mySkills",
            "list": data.skills,
            "field": "Skills"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_radio_btn_renderer_js,
          {
            "name": "work",
            "value": "yes",
            "label": "work",
            "field": "yes"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_radio_btn_renderer_js,
          {
            "name": "work",
            "value": "no",
            "label": "work",
            "field": "yes"
          });
        __tag(out,
          ____________semantic_tags_semantic_components_form_input_text_area_renderer_js,
          {
            "name": "text",
            "placeholder": "Your text",
            "rows": 10,
            "field": "Text"
          });
      });

    out.w('<h3>User form</h3>');
    __tag(out,
      ____________semantic_tags_semantic_components_form_ui_form_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_form_field_ui_fields_renderer_js,
          {
            "list": data.userForm
          });
      });

    out.w('<h3>Custom form</h3>');
    __tag(out,
      ____________semantic_tags_semantic_components_form_ui_form_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_form_field_ui_fields_renderer_js,
          {},
          function(out) {
            __tag(out,
              ____________semantic_tags_semantic_components_form_field_ui_field_renderer_js,
              {
                "ui": "small blue",
                "label": "Username"
              },
              function(out) {
                __tag(out,
                  ____________semantic_tags_semantic_components_form_input_line_input_renderer_js,
                  {
                    "name": "username"
                  });
              });
            __tag(out,
              ____________semantic_tags_semantic_components_form_field_ui_field_renderer_js,
              {
                "ui": "small green",
                "label": "Secret"
              },
              function(out) {
                __tag(out,
                  ____________semantic_tags_semantic_components_form_input_line_input_renderer_js,
                  {
                    "name": "secret",
                    "type": "password"
                  });
              });
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