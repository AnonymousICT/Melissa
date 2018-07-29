$(function() {



//put visdev images in a carousel
// $('#art #carousel').

//put illustration images in thumbnail gallery (hardcoding numbers for now)
let galleryStr = "";
for (let j=0; j<10; j++) {
  galleryStr+='<a href="assets/ils/0'+j+'.png"><img src="assets/ils_thumbs/0'+j+'.png" class="thumb" /></a>';
}
for (let j=10; j<23; j++) {
  galleryStr+='<a href="assets/ils/'+j+'.png"><img src="assets/ils_thumbs/'+j+'.png" class="thumb" /></a>';
}

$('#art #gallery').html(galleryStr);

//Make form submission functional
// $('#contact form').submit();

});

function eventListener () {
	
}