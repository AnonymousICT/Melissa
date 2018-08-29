'use strict'
function renderStartPage() {
  $('main').html(`<section role="region">
    <h2 class="vimeo-headings">Demo Reel</h2>
    <div class="embed-container">
      <iframe src="https://player.vimeo.com/video/247865289" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>
      <h2>Marketing</h2>
    <div class="embed-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IHffm9T2yPk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </section>`);
}


function addCarouselImages(folder,maxnum) {
  let tempStr=`
    <div id="${folder}-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
    <ol class="carousel-indicators">
      <li data-target="#${folder}-carousel" data-slide-to="0" class="active"></li>`;

  for (let i=1; i<maxnum; i++) {
    tempStr+= `<li data-target="#${folder}-carousel" data-slide-to="${i}"></li>`;
  }

  tempStr += `
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/visdev/${folder}/01.jpg" class="d-block w-100" />
    </div>
  `;
  for (let j=2; j<maxnum+1; j++) {
    tempStr+= `
    <div class="carousel-item">
      <img src="assets/visdev/${folder}/${('0' + j).slice(-2)}.jpg" class="d-block w-100" />
    </div>`;
  }
  tempStr+=`
              </div>
            <a class="carousel-control-prev" href="#${folder}-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${folder}-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>`;

  return tempStr;
}

function renderVisDevPage () {
  let visDevStr = `
    <section id="visdev" role="region">
        <h2>Visual Development</h2>
        <div id="busstop">
          <h3>Storyboards for "Bus Stop" Project</h3>`;
  visDevStr += addCarouselImages('busstop',7);
  visDevStr += `
        <div id="sync01">
          <h3>Storyboards for "SYNC" Project: Memory Leak 01</h3>`;
  visDevStr += addCarouselImages('sync01',11);
  visDevStr += `
        <div id="sync07">
          <h3>Storyboards for "SYNC" Project: Memory Leak 07</h3>`;
  visDevStr += addCarouselImages('sync07',18);
  visDevStr += `
        </div>
      </section>`;
  $('main').html(visDevStr);

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
