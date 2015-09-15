/*jslint node: true */
'use strict';
var _ = require('./global');

module.exports = {
  page: {
    name: 'projects',
    title: 'Projects',
    item: _.lists.projects[0], // generic :)
    form: _.forms.project,
    containers: [
      'ships',
      'cars'
    ]
  }
};
