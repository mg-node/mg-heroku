/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'myounggun\'s homepage' }, function(err, stuff) {
     if (!err) { // ����Ʈ�� ������ �� �ƴ϶� �ַܼ� ��
        console.log(stuff);
        res.write(stuff);
        res.end();
     }
  });
};
