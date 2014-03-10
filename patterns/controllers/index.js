/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'myounggun\'s homepage ' }, function(err, stuff) {
	 debugger;
     if (!err) { 
        console.log(stuff);
        res.write(stuff);
        res.end();
     }
  });
};
