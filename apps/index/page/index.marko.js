function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_menu_follow_menu_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/menu/follow-menu/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_sidebar_ui_sidebar_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/sidebar/ui-sidebar/renderer")),
      ____________semantic_tags_semantic_components_sidebar_sidebar_menus_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/sidebar/sidebar-menus/renderer")),
      ____________semantic_tags_semantic_components_menu_top_menu_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/menu/top-menu/renderer")),
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<lasso-page' +
      attr("name", data.name) +
      ' package-path="./dependencies/' +
      escapeXmlAttr(data.name) +
      '.browser.json"></lasso-page><!DOCTYPE html> <html><head><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">   </script><title>' +
      escapeXml(data.title) +
      '</title><lasso-head></lasso-head></head><body>');
    __tag(out,
      ____________semantic_tags_semantic_components_menu_follow_menu_renderer_js,
      {
        "ui": "large top fixed hidden",
        "menu": data.top.menu
      });
    __tag(out,
      ____________semantic_tags_semantic_components_sidebar_ui_sidebar_renderer_js,
      {
        "ui": "left vertical inverted labeled icon"
      },
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_sidebar_sidebar_menus_renderer_js,
          {
            "menus": data.sidebar.menus
          });
      });

    out.w('<div class="pusher"><div class="ui sticky inverted vertical center aligned segment"><div class="ui container">');
    __tag(out,
      ____________semantic_tags_semantic_components_menu_top_menu_renderer_js,
      {
        "ui": "main fixed inverted borderless pointing",
        "menu": data.top.menu
      });

    out.w('</div></div></div><lasso-body></lasso-body>');
    __tag(out,
      _________node_modules_browser_refresh_taglib_refresh_tag_js,
      {
        "enabled": true
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);