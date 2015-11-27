var slideFromNum = 1, lastSlide = 3;

function slideChange(){
	var slideFrom = 'img'+slideFromNum;
	var slideTo = (slideFromNum == lastSlide) ? 'img1' : 'img'+(slideFromNum+1);

	var fromElement = document.getElementById("velocity-slider").getElementsByClassName(slideFrom)[0];
	var toElement = document.getElementById("velocity-slider").getElementsByClassName(slideTo)[0];
	console.log(fromElement);
	fromElement.className = slideFrom;
	toElement.className = slideTo+' top';

	Velocity(toElement, "fadeIn", {duration: 1000, complete: function(elements) {
		fromElement.style.opacity = 0;
		slideFromNum = (slideFromNum == lastSlide) ? 1 : slideFromNum+1;
		setTimeout(slideChange, 4000); 
		}
	});

}

document.addEventListener("DOMContentLoaded", function(event) { 
	setTimeout(slideChange, 4000); 
});