var magicImage = null;
$(document).ready(function() {

	var img = new Image();
	img.onload = function() {
		draw(img);
	};
	img.src = "./img/3.jpg";

	$('.blackAndWhite').on('click',function() {
		magicImage.blackWhite(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.gaosi').on('click',function() {
		magicImage.gaussianBlur(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.edge').on('click',function() {
		magicImage.edge(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.flip').on('click',function() {
		magicImage.colorFlip(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.sharpen').click(function() {
		magicImage.sharpen(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.medianFilter').click(function() {
		magicImage.medianFilter(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.histogramBlance').click(function() {
		magicImage.histogramBlance(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.histogramBlanceWithColor').click(function() {
		magicImage.histogramBlanceWithColor(0, 0,magicImage.canvas.width,magicImage.canvas.height);
	});

	$('.removeOneColor').on('click',function () {
		var colorData = {
			R : 114,
			G : 90,
			B : 50
		},
		threshold = 50;
		magicImage.removeOneColor(0, 0,magicImage.canvas.width,magicImage.canvas.height,colorData,threshold);
	});

	$('.download').on('click',function() {
		var href = $('#canvas')[0].toDataURL('image/png').replace("image/png", "image/octet-stream");
		window.location.href = href;
	})

	$('.reset').on('click',function() {
		magicImage.reset();
	});
});

function draw(img, width, height) {
	var canvas = document.getElementById("canvas");
	magicImage = new MagicImage(canvas);
	var context = canvas.getContext("2d");
	context.drawImage(img, 0, 0, canvas.width, canvas.height);
}