const thumbnailContainer = document.getElementById('thumbnailContainer');

const displayContainer = document.getElementById('displayContainer');

const buttons = document.getElementById('buttons');

const fullscreenButton = document.getElementById('fullscreenButton');

const sideButtons = document.getElementById('side-buttons');
const buttonL = document.getElementById('button-Left');
const buttonR = document.getElementById('button-Right');

let images = [
  {
    src: './Gallery-project-images/Smug-sloth.avif',
    alt: 'Sloth sleeping, facing the camera, close up.',
  },
  {
    src: './Gallery-project-images/Sloth-upsidedown-with-baby.avif',
    alt: `Sloth with a juvenile attached to it's chest while hanging upside down`,
  },
  {
    src: './Gallery-project-images/Sloth-peeking.avif',
    alt: 'Sloth peeking through the leaves looking at the camera',
  },
];

let currentImageIndex;

function createThumbnails() {
  images.forEach(function (image, index) {
    let imageElem = document.createElement('img');
    imageElem.src = image.src;
    imageElem.alt = image.alt;
    imageElem.addEventListener('click', function () {
      createBigImage(image);
      currentImageIndex = index;
    });
    thumbnailContainer.appendChild(imageElem);
  });
}
createThumbnails();

function indexPlusOne() {}

function hideOtherElements() {
  // https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
  fullscreenButton.addEventListener('click', function () {
    if (thumbnailContainer.style.display === 'none' && sideButtons.style.display === 'none') {
      thumbnailContainer.style.display = '';
      sideButtons.style.display = '';
    } else {
      thumbnailContainer.style.display = 'none';
      sideButtons.style.display = 'none';
    }
  });
}

hideOtherElements();

function createBigImage(imgDetails) {
  const bigImage = document.createElement('img');
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;

  displayContainer.appendChild(bigImage);
}

//overflow scroll for scrolling thumbnails
