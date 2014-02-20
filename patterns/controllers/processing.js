/**
 * processing contoller
 */
//function getFilePath(name) {
	//return require('path').normalize(__dirname + '/public/processing/' + name + '.html');
//}

var chapters = [
	{
		name: 'rgb',
		link: './rgb.html'
	},
	{
		name: 'rgb channel',
		link: './rgb_channel.html'
	},
	{
		name: 'grayscale',
		link: './grayscale.html'
	},
	{
		name: 'grayscale faster',
		link: './grayscale_faster.html'
	},
	{
		name: 'blending',
		link: './blending.html'
	}
];

var datas = { 
	title: 'image processing examples', 
	chapters: chapters 
};

exports.index = function(req, res) {
	res.render('processing/index', { 
		locals: datas, 
		cache: false
	});
};
