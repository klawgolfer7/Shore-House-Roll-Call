
// Image Carousel click function

$('.entry').on('click', function(e) {
	console.log("this click function is working")
	var target = $(e.target)
	var src = target.attr('src')

$('.lightbox img').attr('src', src);

$('body').addClass('lightbox-active');
$('.lightbox img').addClass('resize2');

});
$('.close').on('click', function() {
	$('body').removeClass('lightbox-active');
	$('.lightbox img').removeClass('resize2');
});