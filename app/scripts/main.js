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