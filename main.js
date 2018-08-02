'use strict'
function renderStartPage() {
  $('main').html(`<section role="region">
      <iframe src="https://player.vimeo.com/video/247865289" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Demo Reel" aria-hidden="true"></iframe>
    </section>`);
}

function renderVisDevPage () {
  $('main').html(`
    <section id="visdev" role="region">
        <h2>Visual Development</h2>
        <div id="busstop">
          <h3>Storyboards for "Bus Stop" Project</h3>
          <div id="busstop-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
              <li data-target="#busstop-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#busstop-carousel" data-slide-to="1"></li>
              <li data-target="#busstop-carousel" data-slide-to="2"></li>
              <li data-target="#busstop-carousel" data-slide-to="3"></li>
              <li data-target="#busstop-carousel" data-slide-to="4"></li>
              <li data-target="#busstop-carousel" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/visdev/busstop/storybrd_BUS_STOP_1A.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
               <img src="assets/visdev/busstop/storybrd_BUS_STOP_1E.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                 <img src="assets/visdev/busstop/storybrd_BUS_STOP_1G.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/busstop/storybrd_BUS_STOP_1H.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                 <img src="assets/visdev/busstop/storybrd_BUS_STOP_1J.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/busstop/storybrd_BUS_STOP_1K.jpg" class="d-block w-100" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#busstop-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#busstop-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div id="sync">
          <h3>Storyboards for "SYNC" Project: Memory Leak 01</h3>
          <div id="sync01-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
              <li data-target="#sync01-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#sync01-carousel" data-slide-to="1"></li>
              <li data-target="#sync01-carousel" data-slide-to="2"></li>
              <li data-target="#sync01-carousel" data-slide-to="3"></li>
              <li data-target="#sync01-carousel" data-slide-to="4"></li>
              <li data-target="#sync01-carousel" data-slide-to="5"></li>
              <li data-target="#sync01-carousel" data-slide-to="6"></li>
              <li data-target="#sync01-carousel" data-slide-to="7"></li>
              <li data-target="#sync01-carousel" data-slide-to="8"></li>
              <li data-target="#sync01-carousel" data-slide-to="9"></li>
              <li data-target="#sync01-carousel" data-slide-to="10"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/visdev/sync/sync01/1A.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1A02.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1A03.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1A04.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1B.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1B02.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1B03.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1C.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1D.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1D02.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync01/1D03.jpg" class="d-block w-100" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#sync01-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#sync01-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div id="sync07">
          <h3>Storyboards for "SYNC" Project: Memory Leak 07</h3>
          <div id="sync07-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
              <li data-target="#sync07-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#sync07-carousel" data-slide-to="1"></li>
              <li data-target="#sync07-carousel" data-slide-to="2"></li>
              <li data-target="#sync07-carousel" data-slide-to="3"></li>
              <li data-target="#sync07-carousel" data-slide-to="4"></li>
              <li data-target="#sync07-carousel" data-slide-to="5"></li>
              <li data-target="#sync07-carousel" data-slide-to="6"></li>
              <li data-target="#sync07-carousel" data-slide-to="7"></li>
              <li data-target="#sync07-carousel" data-slide-to="8"></li>
              <li data-target="#sync07-carousel" data-slide-to="9"></li>
              <li data-target="#sync07-carousel" data-slide-to="10"></li>
              <li data-target="#sync07-carousel" data-slide-to="11"></li>
              <li data-target="#sync07-carousel" data-slide-to="12"></li>
              <li data-target="#sync07-carousel" data-slide-to="13"></li>
              <li data-target="#sync07-carousel" data-slide-to="14"></li>
              <li data-target="#sync07-carousel" data-slide-to="15"></li>
              <li data-target="#sync07-carousel" data-slide-to="16"></li>
              <li data-target="#sync07-carousel" data-slide-to="17"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/visdev/sync/sync07/7.5A.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7.5A02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7.5A03.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7.5A04.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7.5B.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7.5B02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7A.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7A02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7B.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7C.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7D.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7E.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7E02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7G.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7G02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7H.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7H02.jpg" class="d-block w-100" /></a>
              </div>
              <div class="carousel-item">
                <img src="assets/visdev/sync/sync07/7H03.jpg" class="d-block w-100" /></a>
              </div>
            </div>
            <a class="carousel-control-prev" href="#sync07-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#sync07-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </section>
  `);
}

function renderIllustrationPage () {
  $('main').html(`
    <section id="gallery" role="region">
      <h2>Gallery</h2>
    </section>`
  );

  //populate thumbnail gallery and link to full versions
  let galleryStr = '';
  for (let j=0; j<10; j++) {
    galleryStr+='<a href="assets/ils/0'+j+'.png" data-toggle="lightbox" data-gallery="illustrations-gallery"><img src="assets/ils_thumbs/0'+j+'.png" class="img-thumbnail img-fluid" /></a>';
  };
  for (let j=10; j<23; j++) {
    galleryStr+='<a href="assets/ils/'+j+'.png" data-toggle="lightbox" data-gallery="illustrations-gallery"><img src="assets/ils_thumbs/'+j+'.png" class="img-thumbnail img-fluid" /></a>';
  };
  $('#gallery').append(galleryStr);
}

function renderContactPage() {
  $('main').html(`
    <section role="region">
      <form action="mailto:mapalacios089@gmail.com" method="post" enctype="text/plain">
        <fieldset>
          <legend>Use the form below to email me</legend>
          <input type="text" name="firstname" placeholder="First Name" required><br />
          <input type="text" name="lastname" placeholder="Last Name" required><br />
          <input type="email" name="email" placeholder="Email Address" required><br />
          <textarea name="message" placeholder="Message..." required></textarea><br />
          <input type="submit" value="Send">
          <input type="reset" value="Reset">
        </fieldset>
      </form>
    </section>`);
}


function eventListener () {
  //when the user clicks on home link
  $('header').on('click', '#home', function(event){
    event.preventDefault();
    console.log('you clicked home');
    renderStartPage();
  });
  $('header').on('click', '#art-vis', function(event){
    event.preventDefault();
    console.log('you clicked visual development');
    renderVisDevPage();
  });
  $('header').on('click', '#art-ils', function(event){
    event.preventDefault();
    console.log('you clicked illustrations');
    renderIllustrationPage();
  });
  $('header').on('click','#contact', function(event){
    event.preventDefault();
    console.log('you clicked contact');
    renderContactPage();
  });
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      // alwaysShowClose:true,
      leftArrow:'<',
      rightArrow:'<span class="banano">></span>',
      showArrows:true,
      wrapping:true
    });
  });
}

function initializePortfolio() {
  eventListener();
  renderStartPage();
}
$(initializePortfolio);
