function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ____________semantic_tags_semantic_components_card_ui_card_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/card/ui-card/renderer")),
      __tag = __helpers.t,
      ____________semantic_tags_semantic_components_content_card_content_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/content/card-content/renderer")),
      ____________semantic_tags_semantic_components_card_ui_cards_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/card/ui-cards/renderer")),
      ____________semantic_tags_semantic_components_comment_ui_comment_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/comment/ui-comment/renderer")),
      ____________semantic_tags_semantic_components_comment_ui_comments_renderer_js = __renderer(require("../../../../semantic-tags/semantic/components/comment/ui-comments/renderer")),
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
      ____________semantic_tags_semantic_components_card_ui_card_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_content_card_content_renderer_js,
          {
            "header": "card one",
            "meta": "here we go"
          });
      });

    out.w('<h3>CARDS</h3>');
    __tag(out,
      ____________semantic_tags_semantic_components_card_ui_cards_renderer_js,
      {},
      function(out) {
        __tag(out,
          ____________semantic_tags_semantic_components_card_ui_card_renderer_js,
          {},
          function(out) {
            __tag(out,
              ____________semantic_tags_semantic_components_content_card_content_renderer_js,
              {
                "header": "card one",
                "meta": "here we go"
              });
          });
      });
    __tag(out,
      ____________semantic_tags_semantic_components_comment_ui_comment_renderer_js,
      {
        "content": data.myComment
      });
    __tag(out,
      ____________semantic_tags_semantic_components_comment_ui_comments_renderer_js,
      {
        "list": data.comments
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