'use strict';

import co from 'co';

var r = require('rethinkdbdash')();

co(function*() {
  try {
    var result = yield r.table('users').get('orphee@gmail.com').update({name: 'Michel'});
    console.log(result);
  } catch(err) {
    console.log(err);
  }
});