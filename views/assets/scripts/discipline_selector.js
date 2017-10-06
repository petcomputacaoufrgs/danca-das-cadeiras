var canvasOuter = $('div.canvas-outer');
var canvasInner = $('div.canvas-inner');
var zoomValue = 1;
var zoomSpeed = .035;

function getScale(){
	return Number(canvasOuter.css('width').split('px')[0])/Number(canvasInner.css('width').split('px')[0]);
}

function zoomDelta(direction){
    
    signal = direction > 0 ? 1 : -1;

	zoomValue += signal*zoomSpeed;
	$(canvasInner).css("zoom", zoomValue.toString());
}

// $(canvasInner).css("zoom", zoom());

function createButton(discipline, semesterIndex){
    return '\
                <div class="discipline btn btn-primary btn-lg" style="width: 300px; height: 150px; position: absolute; top: ' + (200*semesterIndex+30) + 'px; left: ' + discipline.position + 'px;">\
                    <div class="discipline-centralize">\
                        <span class="discipline-code">' + discipline.code + '</span>\
                        <br>\
                        <p class="discipline-name">' + discipline.name + '</p>\
                        <span class="discipline-teacher">Lucas Mello Schnorr</span>\
                        <br>\
                        <span class="discipline-credits">Créditos: ' + discipline.credits + '</span>\
                    </div>\
                </div>\
            ';
}


function insertButtons(){
    $.ajax({
        url: "/course/a"
    }).done(function(course){
        
        course.forEach(function(semester, semIndex){
            semester.forEach(function(discipline, discIndex){
                $('.canvas-inner').append(createButton(discipline, semIndex));
                $('.canvas-inner .discipline:last-of-type').click(function(){
                    console.log("semester: " + semIndex + " discipline: " + discIndex);

                });
        
            });
        });
    });
}


$(document).ready(function(){
    insertButtons();
    $('.canvas-outer').bind('mousewheel', function(event){
        var direction = event.originalEvent.wheelDelta;
        zoomDelta(direction);
        

        event.stopPropagation();
        event.preventDefault();
    });
});

