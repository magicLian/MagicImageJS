var canvasImage = null;
$(document).ready(function() {

	var img = new Image();
	img.onload = function() {
		draw(img);
	};
	img.src = "./img/game.jpg";

	$('.blackAndWhite').on('click',function() {
		canvasImage.blackWhite(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.gaosi').on('click',function() {
		canvasImage.gaussianBlur(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.edge').on('click',function() {
		canvasImage.edge(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.flip').on('click',function() {
		canvasImage.colorFlip(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.sharpen').click(function() {
		canvasImage.sharpen(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.medianFilter').click(function() {
		canvasImage.medianFilter(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.histogramBlance').click(function() {
		canvasImage.histogramBlance(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	});

	$('.histogramBlanceWithColor').click(function() {
		canvasImage.histogramBlanceWithColor(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
	})


	$('.removeOneColor').on('click',function () {
		var colorData = {
			R : 255,
			G : 220,
			B : 59
		},
		threshold = 50;
		canvasImage.removeOneColor(0, 0,canvasImage.canvas.width,canvasImage.canvas.height,colorData,threshold);
	});

	$('.download').on('click',function() {
		var href = $('#canvas')[0].toDataURL('image/png').replace("image/png", "image/octet-stream");
		window.location.href = href;
	})

	$('.reset').on('click',function() {
		canvasImage.reset();
	});
});

function draw(img, width, height) {
	var canvas = document.getElementById("canvas");
	canvasImage = new CanvasImage($('#canvas')[0]);
	var context = canvas.getContext("2d");
	context.shadowBlur = 20;
	context.shadowColor = "#DDDDDD";
	context.drawImage(img, 0, 0, canvas.width, canvas.height);
}