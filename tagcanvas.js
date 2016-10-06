 window.onload = function() {
    try {
		TagCanvas.textColour = 'blue';
		TagCanvas.outlineColour = '#ff9999';
      TagCanvas.Start('myCanvas');
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
   $(document).ready(function() {
   if( ! $('#myCanvas').tagcanvas({
     textColour : 'blue',
     outlineThickness : 1,
     maxSpeed : 0.03,
     depth : 0.75
   })) {
     // TagCanvas failed to load
     $('#myCanvasContainer').hide();
   }
   // your other jQuery stuff here...
 });
 $('#myCanvas').tagcanvas({
     depth : 0.75
   },'tagList');