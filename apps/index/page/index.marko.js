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
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title>Manticore CMS</title><script src="js/sortablejs/Sortable.min.js"></script><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">  </script><link rel="stylesheet" type="text/css" href="home/page.css"><script src="home/page.js"></script><title>' +
      escapeXml(data.title) +
      '</title></head><body>');
    __tag(out,
      ____________semantic_tags_semantic_components_menu_follow_menu_renderer_js,
      {
        "ui": "",
        "menu": data.top.menu
      });
    __tag(out,
      ____________semantic_tags_semantic_components_sidebar_sidebar_menu_renderer_js,
      {
        "ui": "left inverted labeled",
        "menus": data.sidebar.menus
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
            "menu": data.top.menu
          });
      });

    out.w('<div class="ui vertical segment"><div class="ui middle aligned stackable grid container"><div class="row"><div class="eight wide column"> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor\nquam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit\namet quam egestas semper.\n<em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper\npharetra. Vestibulum erat wisi, condimentum sed,\n<code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,\neros ipsum rutrum orci, sagittis tempus lacus enim ac dui.\n<a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in\nmi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur\nmassa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus,\nat luctus turpis elit sit amet quam. Vivamus pretium ornare\nest.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul></div></div></div></div></div>');
    __tag(out,
      _________node_modules_browser_refresh_taglib_refresh_tag_js,
      {
        "enabled": true
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);