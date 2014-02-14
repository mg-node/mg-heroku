/**
 * processing contoller
 */
var basePath = __dirname + '/public/processing';
var chapters = [
	{
		name: 'rgb',
		links: basePath + '/rgb.html'
	},
	{
		name: 'rgb channel',
		links: basePath + '/rgb_channel.html'
	},
	{
		name: 'grayscale',
		links: basePath + '/grayscale.html'
	},
	{
		name: 'grayscale faster',
		links: basePath + '/grayscale_faster.html'
	},
	{
		name: 'blending',
		link: basePath + '/blending.html'
	}
];

exports.index = function(req, res) {
	res.render('processing/index', { 
		title: 'image processing exsamples', 
		chapters: chapters 
	});
};
