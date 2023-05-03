$(document).ready(function () {
	var currentGfgStep, nextGfgStep, previousGfgStep;
	var opacity;
	var current = 1;
	var steps = $("fieldset").length;

	setProgressBar(current);

	$(".next-step").click(function () {

		currentGfgStep = $(this).parent();
		nextGfgStep = $(this).parent().next();

		$("#progressbar li").eq($("fieldset")
			.index(nextGfgStep)).addClass("active");

		nextGfgStep.show();
		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',
					'position': 'relative'
				});
				nextGfgStep.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(++current);
	});

	$(".previous-step").click(function () {

		currentGfgStep = $(this).parent();
		previousGfgStep = $(this).parent().prev();

		$("#progressbar li").eq($("fieldset")
			.index(currentGfgStep)).removeClass("active");

		previousGfgStep.show();

		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',
					'position': 'relative'
				});
				previousGfgStep.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(--current);
	});

	function setProgressBar(currentStep) {
		var percent = parseFloat(100 / steps) * current;
		percent = percent.toFixed();
		$(".progress-bar")
			.css("width", percent + "%")
	}

	$(".submit").click(function () {
		return false;
	})

	// Owl carousel
	$('.pnl_sec0.owl-carousel').owlCarousel({
		margin: 10,
		lazyLoad: true,
		dots: false,
		navText: ['<i class="fa fa-solid fa-caret-left"></i>', '<i class="fa fa-solid fa-caret-right"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: true,
				loop: true,
			},
			600: {
				items: 3,
				nav: true,
				loop: true,
			},
			1000: {
				items: 4,
				nav: false,
				loop: false,
			}
		}
	})

	// Owl carousel
	$('.pnl_sec1.owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		lazyLoad: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-solid fa-caret-left"></i>', '<i class="fa fa-solid fa-caret-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})

});

// Angular Js
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	// Step 1: All tiles
	$scope.select1 = "Blog Outline";
	$scope.option1 = [
		{ model: "Blog Outline" },
		{ model: "Blog Outline 1" },
		{ model: "Blog Outline 2" }
	];
	$scope.select01 = "All Content";
	$scope.options01 = [
		{ model: "All Content" },
		{ model: "All Content 1" },
		{ model: "All Content 2" }
	];
	
	$scope.select2 = "Typic & Key Phrases";
	$scope.option2 = [
		{ model: "Typic & Key Phrases" },
		{ model: "Typic & Key Phrases 1" },
		{ model: "Typic & Key Phrases 2" }
	];
	$scope.select02 = "Blog Outline";
	$scope.option02 = [
		{ model: "Blog Outline" },
		{ model: "Blog Outline 1" },
		{ model: "Blog Outline 2" }
	];

	// Step 2: all tiles
	$scope.select5 = "Intro Pragraph";
	$scope.option5 = [
		{ model: "Intro Pragraph" },
		{ model: "Intro Pragraph 1" },
		{ model: "Intro Pragraph 2" }
	];
	$scope.select05 = "All Content";
	$scope.option05 = [
		{ model: "All Content" },
		{ model: "All Content 1" },
		{ model: "All Content 2" }
	];

	$scope.select6 = "300 Word Easy";
	$scope.option6 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select06 = "Sub-topic";
	$scope.option06 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select7 = "300 Word Easy";
	$scope.option7 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select07 = "Sub-topic";
	$scope.option07 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select8 = "300 Word Easy";
	$scope.option8 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select08 = "Sub-topic";
	$scope.option08 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select9 = "300 Word Easy";
	$scope.option9 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select09 = "Sub-topic";
	$scope.option09 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select10 = "300 Word Easy";
	$scope.option10 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select010 = "Sub-topic";
	$scope.option010 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	// Step 3: all tiles
	$scope.select15 = "Intro Pragraph";
	$scope.option15 = [
		{ model: "Intro Pragraph" },
		{ model: "Intro Pragraph 1" },
		{ model: "Intro Pragraph 2" }
	];
	$scope.select015 = "All Content";
	$scope.option015 = [
		{ model: "All Content" },
		{ model: "All Content 1" },
		{ model: "All Content 2" }
	];

	$scope.select16 = "300 Word Easy";
	$scope.option16 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select016 = "Sub-topic";
	$scope.option016 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select17 = "300 Word Easy";
	$scope.option17 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select017 = "Sub-topic";
	$scope.option017 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select18 = "300 Word Easy";
	$scope.option18 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select018 = "Sub-topic";
	$scope.option018 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select19 = "300 Word Easy";
	$scope.option19 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select019 = "Sub-topic";
	$scope.option019 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];

	$scope.select20 = "300 Word Easy";
	$scope.option20 = [
		{ model: "300 Word Easy" },
		{ model: "300 Word Easy 1" },
		{ model: "300 Word Easy 2" }
	];
	$scope.select020 = "Sub-topic";
	$scope.option020 = [
		{ model: "Sub-topic" },
		{ model: "Sub-topic 1" },
		{ model: "Sub-topic 2" }
	];
	
});