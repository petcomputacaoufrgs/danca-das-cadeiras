var canvasOuter = $('div.canvas-outer');
var canvasInner = $('div.canvas-inner');
var zoomValue = 1;
var zoomSpeed = .15;

function getScale(){
	return Number(canvasOuter.css('width').split('px')[0])/Number(canvasInner.css('width').split('px')[0]);
}

function zoomDelta(direction){
    
    signal = direction > 0 ? 1 : -1;

	zoomValue += signal*zoomSpeed;
	$(canvasInner).css("zoom", zoomValue.toString());
}

// $(canvasInner).css("zoom", zoom());


$(document).ready(function(){
    $('.canvas-outer').bind('mousewheel', function(event){
        var direction = event.originalEvent.wheelDelta;
        zoomDelta(direction);
        

        event.stopPropagation();
        event.preventDefault();
    });
});

