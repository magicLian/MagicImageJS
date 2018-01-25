# MagicImageJS #

A lightweight image processing library for Javascript , based on Canvas.

## Features
* toMatrix
* gaussianBlur
* edge
* blackAndWhite
* colorFlip
* sharpen
* medianFilter
* histogramBlance
* histogramBlanceWithColor
* removeOneColor

## Usage
```
<script type="text/javascript" src="js/magicImage.js"></script>

var canvas = document.getElementById("canvas");
var magicImage = new MagicImage(canvas);
magicImage.blackWhite(0, 0,canvasImage.canvas.width,canvasImage.canvas.height);
```

## License
MIT
