/*jslint node: true */
'use strict';

module.exports = {
  meta: require('./meta'),
  data: require('./data'),
  apps: require('./apps'),
  methods: {
    post: function*(next) {
      console.log('POST');
      yield next;
    },
    update: function*(next) {
      console.log('UPDATE');
      yield next;
    }
  }
};
