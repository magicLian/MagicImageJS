# CanvasImageJS #

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

## Usage
```
<script type="text/javascript" src="js/CanvasImage.js"></script>
 
var context = $('#canvas')[0].getContext('2d');
var imageData = context.getImageData(0, 0, 1080, 900);
CanvasImage.blackAndWhite(imageData);
```

## License
MIT
