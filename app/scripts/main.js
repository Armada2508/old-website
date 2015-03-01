var paths = ['', 'home', 'about', 'sponsors','donate', 'first', 'media', 'resources', 'map'];

var content = $("#content");
var partial = 'home';

$(document).on('click', '.ajax', function()  {
	loadPage($(this).attr('href').substr(1));
});

function loadPage(page) {
  var path = page;

  var to = null;

  if (page.indexOf("\.") > 0)
    return;

  $.each(paths, function(key, value) {
    if (value.length == 0)
      return;
    if (path.match("^" + value)) {
      to = value;
    }
  });

  if (to == null)
    return;

  partial = to;

  $.get("/partials/" + partial + ".html", function(data) {
    $("#content").html(data);
    updateLinks();
  });
}

$(document).on("scroll", function() {
  console.log($(".about-members").attr("href"));
})

function updateLinks() {
  var path = getPath();
  $('.ajax').each(function() {
    var thisPath = $(this).attr('href').substr(1);
    if (thisPath == partial || thisPath == path) {
      $(this).addClass('active');
      $(this).parent().addClass('active');
    }
    else {
      $(this).removeClass('active');
      $(this).parent().removeClass('active');
    }
  });
  $('.scrollspy').scrollspy()
}

function getPath() {
  var hash = window.location.hash
  return hash.substr(1);
}

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,             // Integer: Speed of the transition, in milliseconds
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