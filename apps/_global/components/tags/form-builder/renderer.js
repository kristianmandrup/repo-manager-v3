var template = require('./template.marko');

String.prototype.capitalizeFirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var lineInputs = ['name', 'title', 'caption'];
function isTextInput(key, value) {
  if (typeof value === 'string') {
    return lineInputs.indexOf(key) >= 0;
  }
}

function isTextArea(key, value) {
  if (typeof value === 'string') {
    return lineInputs.indexOf(key) < 0;
  }
}

function isMulti(key, value) {
  return Array.isArray(value);
}

var multiSelectors = ['tags', 'categories'];

function isMultiSelect(key, value) {
  return multiSelectors.indexOf(key) >= 0;
}

exports.renderer = function(input, out) {
  console.log('form-builder', input);
  for (key of Object.keys(input.form)) {
    var formObj = input.form[key];
    var value = input.obj[key];
    input.form[key].value = value;
    input.form[key].placeholder = formObj.placeholder || key.capitalizeFirst();

    // =========================================
    // TODO: Simplify!
    // Refactor to:
    // type = findBestType(key, value)
    // input.form[key][type] = true;
    // =========================================
    if (isMulti(key, value)) {
      input.form[key].multiSelect = isMultiSelect(key, value);
      if (typeof formObj.refList === 'function') {
        input.form[key].refList = formObj.refList(out.global.available);
      }
    } else {
      input.form[key].textinput = isTextInput(key, value);
      input.form[key].textarea = isTextArea(key, value);
    }
  }
  console.log('form-builder ready', input.form);

  template.render(input, out);
};
