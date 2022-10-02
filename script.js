const audioPlayer = document.getElementById('siteHeaderAudioPlayer');
const logo = document.getElementById('siteHeaderLogo');
const title = document.getElementById('siteHeaderTitle');
const flexContainer = document.getElementById('flexContainer');
const footer = document.getElementById('footer')

function addClasses() {
  audioPlayer.classList.replace('site-header__audio', 'site-header__audio--active');
  logo.classList.replace('site-header__logo', 'site-header__logo--active');
  title.classList.replace('site-header__title', 'site-header__title--active');
  flexContainer.classList.replace('flex-container', 'flex-container--active');
  footer.classList.replace('footer', 'footer--active');
  // console.log('Funkar');
  // console.log(audioPlayer.outerHTML);
}

audioPlayer.addEventListener('play', addClasses);