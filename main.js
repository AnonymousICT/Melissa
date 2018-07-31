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




}); //document.ready
function renderStartPage() {
	$('main').html(`<section role="region">
			<iframe src="https://player.vimeo.com/video/247865289" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Demo Reel" aria-hidden="true"></iframe>
		</section>`)
}

function renderIllustrationPage () {

}

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
	$('main').on('click', '.home', function(){
		renderStartPage();
	});

	$('main').on('click','.contact', function(){
		renderContactPage();
	})
}

function initializePortfolio() {
	eventListener();
	renderStartPage();
}
$(initializePortfolio);
