function rangeSlider(id, onDrag) {

    var range = document.getElementById(id),
        dragger = range.children[0],
        draggerWidth = 10, // width of your dragger
        down = false,
        rangeWidth, rangeLeft;

    dragger.style.width = draggerWidth + 'px';
    dragger.style.left = -draggerWidth + 'px';
    dragger.style.marginLeft = (draggerWidth / 2) + 'px';

    range.addEventListener("mousedown", function(e) {
        rangeWidth = this.offsetWidth;
        rangeLeft = this.offsetLeft;
        down = true;
        updateDragger(e);
        return false;
    });

    document.addEventListener("mousemove", function(e) {
        updateDragger(e);
    });

    document.addEventListener("mouseup", function() {
        down = false;
    });

    function updateDragger(e) {
        if (down && e.pageX >= rangeLeft && e.pageX <= (rangeLeft + rangeWidth)) {
            dragger.style.left = e.pageX - rangeLeft - draggerWidth + 'px';
            if (typeof onDrag == "function") onDrag(Math.round(((e.pageX - rangeLeft) / rangeWidth) * 100));
            
            creationLine("line");
        }
    }

}



// Run!

rangeSlider('range-slider-1', function(value) {
    document.getElementById('test-result').innerHTML = value + '%';
    rs1 = document.getElementById('X1').innerHTML = value;
});

rangeSlider('range-slider-2', function(value) {
    document.getElementById('test-result').innerHTML = value + '%';
    rs2 = document.getElementById('Y1').innerHTML = value;
});

rangeSlider('range-slider-3', function(value) {
    document.getElementById('test-result').innerHTML = value + '%';
    rs3 = document.getElementById('X2').innerHTML = value;
});

rangeSlider('range-slider-4', function(value) {
    document.getElementById('test-result').innerHTML = value + '%';
    rs4 = document.getElementById('Y2').innerHTML = value;
});

function creationLine(lineID){
    
    var x1 = rs1;
    var y1 = rs2;
    var x2 = rs3;
    var y2 = rs4;

    console.log(x1);
    console.log("x1");
    distance = Math.sqrt(((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)));

    xMid = (x1+x2)/2
    yMid = (y1+y2)/2

    slopeInRadian = Math.atan2(y1-y2, x1-x2)
    slopeInDegrees = (slopeInRadian*180)/Math.PI;

    console.log(distance);
    line = document.getElementById(lineID)
    line.style.width = distance + "px";
    line.style.top = yMid
    line.style.left = xMid-(distance/2)
    line.style.transform = "rotate("+slopeInDegrees+"deg)";
     
}