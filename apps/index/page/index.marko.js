function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      _________node_modules_browser_refresh_taglib_refresh_tag_js = __renderer(require("browser-refresh-taglib/refresh-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><link rel="stylesheet" type="text/css" href="semantic.min.css"><script src="https://code.jquery.com/jquery-2.1.4.min.js">   </script><script src="semantic.min.js">   </script><title>' +
      escapeXml(data.title) +
      '</title><lasso-head></lasso-head></head><body><h1>' +
      escapeXml(data.header) +
      ' </h1><h2>' +
      escapeXml(out.global.appName) +
      '</h2><icon-list items="out.global.lists.users"></icon-list><icon-list items="out.global.lists.repos"></icon-list><lasso-body></lasso-body>');
    __tag(out,
      _________node_modules_browser_refresh_taglib_refresh_tag_js,
      {
        "enabled": true
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);