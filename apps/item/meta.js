/*jslint node: true */
'use strict';

module.exports = {
  type: 'item',
  form: true, // if it contains a form to edit the item
  page: {
    // type: 'item',
    app: 'item' // app to use for page if no page found here
  },
  data: {
    // type: 'item',
    // app: 'item' app to use as data source if no data here
  }
}
