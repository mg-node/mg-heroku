/**
 * processing contoller
 */
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
	},
	{
		name: 'ascii mosaic',
		link: './ascii.html'
	},
	{
		name: 'ascii mosaic advanced',
		link: './ascii_advanced.html'
	},
	{
		name: 'complementary',
		link: './complementary.html'
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
