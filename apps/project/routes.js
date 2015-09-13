/*jslint node: true */
'use strict';

// Note: Ideally you would have more complex rendering logic,
// using incoming params to decide which template to render.
// However by design, we keep server routing simple and complex
// routing logic should (normally) only be on the client or
// done in other more mature server side frameworks (for now)
// however we should allow functions instead of strings, they are simply passed
// to render anyways!!
module.exports = {
  '.': 'app',
  ':id': function(args) {
    // complex render logic using args to decide what to render!
    return 'item';
  },
  '/list/:id': 'list'
}
