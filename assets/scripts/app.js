const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Python",
				weight: 8.5
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "Javascript",
				weight: 14
			}, {
				text: "html5",
				weight: 10
			}, {
				text: "Programming",
				weight: 7
			}, {
				text: "Node",
				weight: 13
			}, {
				text: "React",
				weight: 15
			}, {
				text: "Redux",
				weight: 11.5
			}, {
				text: "PHP",
				weight: 9
			},{
				text: "C++",
				weight: 10.5
			},{
				text: "C",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love to code.",
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "color": "gray"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
