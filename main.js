$(window).load(function(){
	var height = window.innerHeight,
  x= 0, y= height/2,
	curveX = 10,
	curveY = 0,
	targetX = 0,
	xitteration = 0,
	yitteration = 0,
	menuExpanded = false;
	currentOpen = "none";
	
	blob = $('#blob'),
	blobPath = $('#blob-path'),

	hamburger = $('.hamburger');

	$(this).on('mousemove', function(e){
		x = e.pageX;
		
		y = e.pageY;
	});

	$('.menu-inner').on('mouseenter', function(){
		$(this).parent().addClass('expanded');
		menuExpanded = true;
	});

	$('.menu-inner').on('mouseleave', function(){
		menuExpanded = false;
		$(this).parent().removeClass('expanded');
	});

	$('#about_button').click(function(){
	 	menuExpanded = false;
	 	$('.menu-inner').parent().removeClass('expanded');
	});

	$('#services_button').click(function(){
		menuExpanded = false;
		$('.menu-inner').parent().removeClass('expanded');
	$('#pictures_button').click(function(){
		menuExpanded = false;
		$('.menu-inner').parent().removeClass('expanded');
   	});
	$('#contact_button').click(function(){
		menuExpanded = false;
		$('.menu-inner').parent().removeClass('expanded');
   	});


	// $('#services_button').click(function(){
	// 	menuExpanded = false;
	// 	$('.menu-inner').parent().removeClass('expanded');
	// 	if (currentOpen == "none") {
	// 		$('#services').toggleClass('open');
	// 		currentOpen = "services";
	// 	}
	// 	else {
	// 		switch (currentOpen) {
	// 			case "about":
	// 				$('#about').toggleClass('open');
	// 				$('#services').toggleClass('open');
	// 				currentOpen = "services";
	// 				break;
	// 			case "services":
	// 				$('#services').toggleClass('open');
	// 				currentOpen = "none";
	// 				break;
	// 			case "pictures":
	// 				$('#pictures').toggleClass('open');
	// 				$('#services').toggleClass('open');
	// 				currentOpen = "services";
	// 				break;
	// 			case "contact":
	// 				$('#contact').toggleClass('open');
	// 				$('#services').toggleClass('open');
	// 				currentOpen = "services";
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}
		
	// });

	// $('#pictures_button').click(function(){
	// 	menuExpanded = false;
	// 	$('.menu-inner').parent().removeClass('expanded');
	// 	if (currentOpen == "none") {
	// 		$('#pictures').toggleClass('open');
	// 		currentOpen = "pictures";
	// 	}
	// 	else {
	// 		switch (currentOpen) {
	// 			case "about":
	// 				$('#about').toggleClass('open');
	// 				$('#pictures').toggleClass('open');
	// 				currentOpen = "pictures";
	// 				break;
	// 			case "services":
	// 				$('#services').toggleClass('open');
	// 				$('#pictures').toggleClass('open');
	// 				currentOpen = "pictures";
	// 				break;
	// 			case "pictures":
	// 				$('#pictures').toggleClass('open');
	// 				currentOpen = "none";
	// 				break;
	// 			case "contact":
	// 				$('#contact').toggleClass('open');
	// 				$('#pictures').toggleClass('open');
	// 				currentOpen = "pictures";
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}
		
	// });

	// $('#contact_button').click(function(){
	// 	menuExpanded = false;
	// 	$('.menu-inner').parent().removeClass('expanded');
	// 	if (currentOpen == "none") {
	// 		$('#contact').toggleClass('open');
	// 		currentOpen = "contact";
	// 	}
	// 	else {
	// 		switch (currentOpen) {
	// 			case "about":
	// 				$('#about').toggleClass('open');
	// 				$('#contact').toggleClass('open');
	// 				currentOpen = "contact";
	// 				break;
	// 			case "services":
	// 				$('#services').toggleClass('open');
	// 				$('#contact').toggleClass('open');
	// 				currentOpen = "contact";
	// 				break;
	// 			case "pictures":
	// 				$('#pictures').toggleClass('open');
	// 				$('#contact').toggleClass('open');
	// 				currentOpen = "contact";
	// 				break;
	// 			case "contact":
	// 				$('#contact').toggleClass('open');
	// 				currentOpen = "none";
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}
		
 });

	function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	}

	var hoverZone = 150;
	var expandAmount = 20;
	
	function svgCurve() {
		if ((curveX > x-1) && (curveX < x+1)) {
			xitteration = 0;
		} else {
			if (menuExpanded) {
				targetX = 0;
			} else {
				xitteration = 0;
				if (x > hoverZone) {
					targetX = 0;
				} else {
					targetX = -(((60+expandAmount)/100)*(x-hoverZone));
				}			
			}
			xitteration++;
		}

		if ((curveY > y-1) && (curveY < y+1)) {
			yitteration = 0;
		} else {
			yitteration = 0;
			yitteration++;	
		}

		curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
		curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

		var anchorDistance = 200;
		var curviness = anchorDistance - 40;

		var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

		blobPath.attr('d', newCurve2);

		blob.width(curveX+60);

		hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
    
    $('h2').css('transform', 'translateY('+curveY+'px)');
		window.requestAnimationFrame(svgCurve);
	}

	window.requestAnimationFrame(svgCurve);
	
});