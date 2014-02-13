/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'myounggun\'s homepage' }, function(err, stuff) {
     if (!err) { // 컨텐트를 브라우저 뿐 아니라 콘솔로 출
        console.log(stuff);
        res.write(stuff);
        res.end();
     }
  });
};
