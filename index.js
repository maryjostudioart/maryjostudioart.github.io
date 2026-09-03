

var works = [];
var cats = [[],[],[]];

// DATA // 


// Get site location data if exists

// Get the query string part of the URL (e.g., "?product=shirt&color=blue&size=M&size=L")
const queryString = window.location.search;

// Create a URLSearchParams object from the query string
const urlParams = new URLSearchParams(queryString);

// Check and see which page
// var siteLocation = urlParams.get("l");

// console.log(siteLocation);


$.getJSON("images.json", function(data) {

	// Use the JSON data here
	console.log("Loaded works:", data.length);
	works = data.works;

	//sort items into different lists based on category.  
	//if featured, add to front of list otherwise end
	$.each(works, function(index, item) {
		$.each(item.tags, function(index, tag) {

			if (item.featured == 1) cats[tag].unshift(item);
			else cats[tag].push(item);

		});
	});

    colfromlist(cats[0].slice(0, cats[0].length/2), $('#abstract'));
    colfromlist(cats[0].slice(cats[0].length/2), $('#abstract'));

    colfromlist(cats[1].slice(0, cats[1].length/2), $('#landscape'));
    colfromlist(cats[1].slice(cats[1].length/2), $('#landscape'));
   	
   	colfromlist(cats[2].slice(0, cats[2].length/2), $('#whimsy'));
   	colfromlist(cats[2].slice(cats[2].length/2), $('#whimsy'));

   	$('#category').hide();
   	console.log(cats.length);

}).fail(function(jqXHR, textStatus, errorThrown) {
	console.error("Error fetching the local JSON file:", textStatus, errorThrown);
});




function colfromlist(items, container) {

	var html = '<div class="col">';

    $.each(items, function(index, item) {

        // Create HTML elements for each item

		var htmldetail = '<h3>' + item.title + '</h3>';
        htmldetail += 'Medium: ' + item.medium;
        htmldetail += '<br>Size: ' + item.size;
        htmldetail += '<br>Price: ' + item.price;
        
        html += '<div class="w">';
        html += '<a href="assets/images/imagesfull/' + item.image_url + '"';
        html += 'data-lightbox="detail"';
        html += 'data-title="' + htmldetail + '">';
        html += '<img src=assets/images/imagestn/' + item.image_url + '></a>';
        html += '<div class="d">' + htmldetail + '</div>';
        html += '</div><br>';
    });
	container.append(html);
};




lightbox.option({
  'resizeDuration': 300,
  'fadeDuration': 300,
  'imageFadeDuration': 300,
  'showImageNumberLabel': false,
  'wrapAround': true,
  'maxHeight': 600
});



const overlayLogo = $('#p2');




// scroll behaviour

$(function() {
	$('#about').load('about.html');
});



// "link" behavior 


// main logo
$("#logoc a").click(function(event) {
	event.preventDefault();
	$("#about").hide();
	$("#work").show();
	$("#contact").hide();
	$("#main").css('display', 'inline-block');
});
// small logo on left of site
$("#logoc a").click(function(event) {
	event.preventDefault();
	$("#header")[0].scrollIntoView({ behavior: 'smooth' });
});
// about 
$(".at a").click(function(event) {
	event.preventDefault();
	$("#about").css('display', 'flex');
	$("#work").hide();
	$("#contact").hide();
	$("#main").hide();
	$("#header")[0].scrollIntoView({ behavior: 'smooth' });
});


//WORK
$(".wk a").click(function(event) {
	event.preventDefault();
	$("#about").hide();
	$("#work").show();
	$("#categories").css('display', 'flex');
	$("#category").hide();
	$("#main").hide();
	$("#logol").fadeIn();
	$("#header")[0].scrollIntoView({ behavior: 'smooth' });
	console.log( "here");
});

// contact
$(".ct a").click(function(event) {
	event.preventDefault();
	$("#work").hide();
	$("#main").hide();
	$("#about").css('display', 'flex');
	$("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
	$(".footer")[0].scrollIntoView({ behavior: 'smooth' });
});



// https://css-tricks.com/adaptive-photo-layout-with-flexbox/


//click on any abstracts link
$(".l0 a").click(function(event) {
	event.preventDefault();
	$("#categories").hide();
	$("#main").hide();
	$("#category").css('display', 'flex');
	$("#abstract").css('display', 'flex');
	$("#landscape").hide();
	$("#whimsy").hide();
	$("#header")[0].scrollIntoView({ behavior: 'smooth' });
	$("#logol").fadeIn();
	$("#title").html("<h1>abstract</h1>");
	$("#pic").html("<img src='assets/images/work-abstract.webp'>");
	$("#catstatement").html("<p>My abstract and nonrepresentational work is rooted in something observed or felt.</p>");
	$("#nav div a").css("font-weight", "normal");
	$("#a a").css("font-weight", "bold");


});
// click on any landscapes link
$(".l1 a").click(function(event) {
	event.preventDefault();
	$("#categories").hide();
	$("#main").hide();
	$("#category").css('display', 'flex');
	$("#landscape").css('display', 'flex');
	$("#abstract").hide();
	$("#whimsy").hide();

	$("#header")[0].scrollIntoView({ behavior: 'smooth' });
	$("#logol").fadeIn();

	$("#title").html("<h1>landscape</h1>");
	$("#pic").html("<img src='assets/images/work-landscape.webp'>");
	$("#catstatement").html("<p>Most of my painted landscapes are riffs on--interpretations of places I’ve visited, or gardens I’ve made for myself or others. Abstracted landscapes help me visually narrate how and forms colors in the natural world embrace and nurture me.</p>");
	$("#nav div a").css("font-weight", "normal");
	$("#l a").css("font-weight", "bold");

});
//click on any whimsies link
$(".l2 a").click(function(event) {
	event.preventDefault();
	$("#categories").hide();
	$("#main").hide();
	$("#category").css('display', 'flex');
	$("#whimsy").css('display', 'flex');
	$("#landscape").hide();
	$("#abstract").hide();
	$("#header")[0].scrollIntoView({ behavior: 'smooth' });

	$("#title").html("<h1>whimsy</h1>");
	$("#pic").html("<img src='assets/images/work-whimsy.webp'>");
	$("#catstatement").html("<p>Art is a reflection of life.</p><p>Occasionally embracing the absurd, joyful and unexpected as art as well as in life fights the inner cynic.</p>");
	$("#nav div a").css("font-weight", "normal");
	$("#w a").css("font-weight", "bold");
});

