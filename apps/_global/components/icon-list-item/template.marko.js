function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="item"><i class="icon ' +
      escapeXmlAttr(data.size) +
      ' ' +
      escapeXmlAttr(data.icon) +
      ' ' +
      escapeXmlAttr(data.color) +
      ' ' +
      escapeXmlAttr(data.align) +
      '"></i><div class="content"><a class="header">' +
      escapeXml(data.label) +
      '</a><div class="description">' +
      escapeXml(data.desc) +
      '</div></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);