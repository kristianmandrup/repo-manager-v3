function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_menu_follow_menu_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/menu/follow-menu/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_sidebar_sidebar_menu_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/sidebar/sidebar-menu/renderer")),
      ____________semantic_tags_semantic_components_menu_menu_container_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/menu/menu-container/renderer")),
      ____________semantic_tags_semantic_components_menu_top_menu_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/menu/top-menu/renderer")),
      ____________semantic_tags_semantic_components_hero_ui_hero_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/hero/ui-hero/renderer")),
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title>Manticore CMS</title><script src="js/sortablejs/Sortable.min.js"></script><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">  </script><link rel="stylesheet" type="text/css" href="home/page.css"><script src="home/page.js"></script><title>' +
      escapeXml(data.title) +
      '</title></head><body>');
    __tag(out,
      ____________semantic_tags_semantic_components_menu_follow_menu_renderer_js,
      {
        "ui": "",
        "menus": out.global.menus
      });
    __tag(out,
      ____________semantic_tags_semantic_components_sidebar_sidebar_menu_renderer_js,
      {
        "ui": "left inverted labeled",
        "menus": out.global.menus.sidebar
      });

    out.w('<div class="pusher">');
    __tag(out,
      ____________semantic_tags_semantic_components_menu_menu_container_renderer_js,
      {
        "ui": "top-menu sticky center aligned"
      },
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_menu_top_menu_renderer_js,
          {
            "menus": out.global.menus
          });
      });
    __tag(out,
      ____________semantic_tags_semantic_components_hero_ui_hero_renderer_js,
      {
        "title": "Manticore.io",
        "caption": "Your one stop SAAS shop"
      });

    out.w('</div>');
    __tag(out,
      _________node_modules_browser_refresh_taglib_refresh_tag_js,
      {
        "enabled": true
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);