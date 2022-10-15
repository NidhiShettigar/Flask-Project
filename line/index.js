function creationLine(x1,x2,y1,y2,lineID){

    distance = Math.sqrt(((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)));

    xMid = (x1+x2)/2
    yMid = (y1+y2)/2

    slopeInRadian = Math.atan2(y1-y2, x1-x2)
    slopeInDegrees = (slopeInRadian*180)/Math.PI;

    line = document.getElementById(lineID)
    line.style.width = distance 
    line.style.top = yMid
    line.style.left = xMid-(distance/2)
    line.style.transform = "rotate("+slopeInDegrees+"deg)";
     
  }