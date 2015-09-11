'use strict';
let marooka = require('marooka');
let path = require('path');
let rootPath = path.resolve(path.join(__dirname, '../'));

// mounting multiple apps on appContainer instance
let multi = ['projects', 'services', 'repos', 'teams', 'users'];
let single = ['project', 'service', 'repo', 'team', 'user'];

// let apps = ['index', ].concat(multi).concat(single);
let apps = ['project'];

module.exports = new marooka.AppMounter(rootPath).mountApps(apps).start();
