/*jslint node: true */
'use strict';
var _ = require('./global');

module.exports = {
  // See global data, lists/projects
  // out.global.lists.projects
  page: {
    name: 'projects',
    title: 'Projects',
    timeline: {
      title: 'My Project',
      header: 'Activity',
      button: {
        label: 'Join Project'
      },
      events: [{
        object: {
          name: 'Kris',
          action: 'added'
        },
        subject: {
          name: 'Javier',
          target: 'to the project'
        }
      }]
    }
  }
};
