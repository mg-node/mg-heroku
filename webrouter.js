/**
 * web router
 */
exports.route = function(app, prefix) {
   prefix = '/' + prefix;
   
   var prefixObj = require('./patterns/controllers/' + prefix);

   app.get(prefix, prefixObj.index);
   //app.get(prefix + ':id', prefixObj.show);
};
