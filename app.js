const thumbnailContainer = document.getElementById('thumbnailContainer');

const displayContainer = document.getElementById('displayContainer');

const buttons = document.getElementById('buttons');

const fullscreenButton = document.getElementById('fullscreenButton');

const sideButtons = document.getElementsByClassName('side-buttons');

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

function createThumbnails() {
  images.forEach(function (image, index) {
    let imageElem = document.createElement('img');
    imageElem.src = image.src;
    imageElem.alt = image.alt;
    imageElem.addEventListener('click', function () {
      createBigImage(image);
      currentImageIndex = index;
    });
    thumbnailContainer.appendChild(imageElem); // unsure why this needs to be here and not inline with the above. I believe it is because I do not need it linked to the createBigImage function.
  });
}

createThumbnails();

function hideOtherElements() {}
// https://medium.com/@theredwillows/moving-an-element-with-javascript-part-1-765c6a083d45 read for movement
//   thumbnailContainer.innerHTML = '';
//   displayContainer.innerHTML = '';
//   sideButtons.innerHTML = '';
//   fullscreenButton.innerHTML = 'Return';
//hide thumbnail container, hide buttons, add a return button.

function createBigImage(imgDetails) {
  const bigImage = document.createElement('img');
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;

  displayContainer.appendChild(bigImage);
}

//overflow scroll for scrolling thumbnails
