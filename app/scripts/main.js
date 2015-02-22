console.log('\'Allo \'Allo!');


var paths = ['', 'home', 'about', 'sponsors','donate', 'first', 'media', 'resources', 'map'];

loadPage(null);

$('.ajax').on('click', function()  {
	loadPage($(this).attr('href'));
});

function loadPage(page) {
	var hash = window.location.hash

	if (page != null) {
		hash = page;
	}

	var path = hash.substr(1);

	var index = jQuery.inArray(path, paths);

	if (index == -1) {
		return;
	}

	if (path == '') {
		path = 'home';
	}

	$('#content').load('/partials/' + path + '.html');

	$('.ajax').each(function() {
		var thisPath = $(this).attr('href').substr(1);
		if (thisPath != path) {
			$(this).parent().removeClass('active');
		}
		else {
			$(this).parent().addClass('active');
		}
	});
}

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});