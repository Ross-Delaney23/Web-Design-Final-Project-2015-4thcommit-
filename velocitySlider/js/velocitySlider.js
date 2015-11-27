var slideFromNum = 1, lastSlide = 3;

function slideChange(){
	//Get Class
	var slideFrom = 'img'+slideFromNum;
	var slideTo = (slideFromNum == lastSlide) ? 'img1' : 'img'+(slideFromNum++);
	
	//Get Elements
	var fromElement = document.getElementById("velocity-slider").getElementsByClassName(slideFrom)[0];
	var toElement = document.getElementById("velocity-slider").getElementsByClassName(slideTo)[0];
	
	//Move Top Class to element fading in
	fromElement.className = slideFrom;
	toElement.className = slideTo+' top';
	
	//Animate in and run function again after 4 seconds
	Velocity(toElement, "fadeIn", {duration: 1000, complete: function(elements) {
		fromElement.style.opacity = 0;
		slideFromNum = (slideFromNum == lastSlide) ? 1 : slideFromNum++;
		setTimeout(slideChange, 4000); 
		}
	});

}

//Run slideChange() function 4 seconds after page is loaded
document.addEventListener("DOMContentLoaded", function(event) { 
	setTimeout(slideChange, 4000); 
});