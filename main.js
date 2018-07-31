'use strict'
$(function() {

//displays visual development images
// $('#art #visdev').

//put illustration images in thumbnail gallery (hardcoding numbers for now)
let galleryStr = "";
for (let j=0; j<10; j++) {
  galleryStr+='<a href="assets/ils/0'+j+'.png"><img src="assets/ils_thumbs/0'+j+'.png" class="thumb" /></a>';
}
for (let j=10; j<=23; j++) {
  galleryStr+='<a href="assets/ils/'+j+'.png"><img src="assets/ils_thumbs/'+j+'.png" class="thumb" /></a>';
}

$('#art #gallery').append(galleryStr);

//Make form submission functional
// $('#contact form').submit();

});
function renderStartPage() {
	$('main').html(`<section role="region">
			<iframe src="https://player.vimeo.com/video/247865289" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Demo Reel" aria-hidden="true"></iframe>
		</section>`)
}

function renderIllustrationPage () {
	$('main').html(`<section id="visdev" role="region">
				<h2>Visual Development</h2>
				<div id="busstop">
					<h3>Bus Stop Project</h3>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1A.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1A.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1B.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1B.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1E.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1E.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1G.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1G.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1H.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1H.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1J.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1J.jpg" class="thumb" /></a>
					<a href="assets/visdev/busstop/storybrd_BUS_STOP_1K.jpg"><img src="assets/visdev/busstop/storybrd_BUS_STOP_1K.jpg" class="thumb" /></a>
				</div>
				<div id="sync">
					<h3>SYNC Project</h3>
					<a href="assets/visdev/sync/sync_01/1A.jpg"><img src="assets/visdev/sync/sync_01/1A.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1A02.jpg"><img src="assets/visdev/sync/sync_01/1A02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1A03.jpg"><img src="assets/visdev/sync/sync_01/1A03.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1A04.jpg"><img src="assets/visdev/sync/sync_01/1A04.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1B.jpg"><img src="assets/visdev/sync/sync_01/1B.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1B02.jpg"><img src="assets/visdev/sync/sync_01/1B02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1B03.jpg"><img src="assets/visdev/sync/sync_01/1B03.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1C.jpg"><img src="assets/visdev/sync/sync_01/1C.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1D.jpg"><img src="assets/visdev/sync/sync_01/1D.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1D02.jpg"><img src="assets/visdev/sync/sync_01/1D02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/sync_01/1D03.jpg"><img src="assets/visdev/sync/sync_01/1D03.jpg" class="thumb" /></a>

					<h3>SYNC Project: Memory Leak 07</h3>
					<a href="assets/visdev/sync/memleak_07/7.5A.jpg"><img src="assets/visdev/sync/memleak_07/7.5A.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7.5A02.jpg"><img src="assets/visdev/sync/memleak_07/7.5A02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7.5A03.jpg"><img src="assets/visdev/sync/memleak_07/7.5A03.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7.5A04.jpg"><img src="assets/visdev/sync/memleak_07/7.5A04.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7.5B.jpg"><img src="assets/visdev/sync/memleak_07/7.5B.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7.5B02.jpg"><img src="assets/visdev/sync/memleak_07/7.5B02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7A.jpg"><img src="assets/visdev/sync/memleak_07/7A.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7A02.jpg"><img src="assets/visdev/sync/memleak_07/7A02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7B.jpg"><img src="assets/visdev/sync/memleak_07/7B.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7C.jpg"><img src="assets/visdev/sync/memleak_07/7C.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7D.jpg"><img src="assets/visdev/sync/memleak_07/7D.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7E.jpg"><img src="assets/visdev/sync/memleak_07/7E.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7E02.jpg"><img src="assets/visdev/sync/memleak_07/7E02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7G.jpg"><img src="assets/visdev/sync/memleak_07/7G.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7G02.jpg"><img src="assets/visdev/sync/memleak_07/7G02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7H.jpg"><img src="assets/visdev/sync/memleak_07/7H.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7H02.jpg"><img src="assets/visdev/sync/memleak_07/7H02.jpg" class="thumb" /></a>
					<a href="assets/visdev/sync/memleak_07/7H03.jpg"><img src="assets/visdev/sync/memleak_07/7H03.jpg" class="thumb" /></a>
				</div>
			</section>
			<section id="gallery" role="region">
				<h2>Gallery</h2>
			</section>`)
    //populate thumbnail gallery and link to full versions
    let galleryStr = "";
    for (let j=0; j<10; j++) {
      galleryStr+='<a href="assets/ils/0'+j+'.png"><img src="assets/ils_thumbs/0'+j+'.png" class="thumb" /></a>';
    }
    for (let j=10; j<23; j++) {
      galleryStr+='<a href="assets/ils/'+j+'.png"><img src="assets/ils_thumbs/'+j+'.png" class="thumb" /></a>';
    }
    $('#gallery').append(galleryStr);}

function renderContactPage() {
	$('main').html(`<section role="region">
				<form>
					<fieldset>
						<legend>Use the form below to email me</legend>
						<input type="text" name="firstname" placeholder="First Name" required><br />
						<input type="text" name="lastname" placeholder="Last Name" required><br />
						<input type="email" name="email" placeholder="Email Address" required><br />
						<textarea name="message" placeholder="Message..." required></textarea><br />
						<input type="submit" value="submit">
					</fieldset>
				</form>
			</section>`)
}


function eventListener () {
	//when the user clicks on home link
	$('header').on('click', '#home', function(event){
		event.preventDefault();
		console.log('you clicked home');
		renderStartPage();
	});
	$('header').on('click', '#art', function(event){
		event.preventDefault();
		console.log('you clicked illustrations');
		renderIllustrationPage();
	})
	$('header').on('click','#contact', function(event){
		event.preventDefault();
		console.log('you clicked contact');
		renderContactPage();
	})
}

function initializePortfolio() {
	eventListener();
	renderStartPage();
}
$(initializePortfolio);
