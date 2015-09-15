/*jslint node: true */
'use strict';
var _ = require('./global');

module.exports = {
  // See global data, lists/projects
  // out.global.lists.projects
  page: {
    name: 'projects',
    title: 'Projects',
    segments: [
      {
        title: 'Places',
        // Drag items to display in list
        list: [
          {
            // title: (name humanized)
            name: 'newcastle'
          },
          {
            name: 'man-united'
          },
          {
            name: 'chelsea'
          }
        ],
        // Add to search dropdown
        search: {
          list: [
            'Here',
            'There',
            'Everywhere'
          ]
         }

      }
    ]
  }
}
