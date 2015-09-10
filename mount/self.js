'use strict';
let marooka = require('marooka');
let path = require('path');
let rootPath = path.resolve(path.join(__dirname, '../'));
// mounting multiple apps on appContainer instance
let apps = ['index', 'projects', 'repos'];
module.exports = new marooka.AppMounter(rootPath).mountApps(apps).start();
