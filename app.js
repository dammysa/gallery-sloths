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
    src: './Gallery-project-images/Sloth-hanging-with-baby.avif',
    alt: `Sloth with a juvenile attached to it's chest while hanging`,
  },
  {
    src: './Gallery-project-images/Sloth-peeking.avif',
    alt: 'Sloth peeking through the leaves looking at the camera',
  },
  {
    src: './Gallery-project-images/Sloth-looking-up.avif',
    alt: 'Sloth looking up while hanging on a tree',
  },
  {
    src: './Gallery-project-images/Sloth-hugging-tree-with-baby.avif',
    alt: 'Sloth hugging a tree with all limbs, while baby hangs from sloth',
  },
  {
    src: './Gallery-project-images/Nightime-sloth.avif',
    alt: 'Night photo of sloth, with stary background',
  },
];

let currentImageIndex = 0;
createBigImage(images[currentImageIndex]);

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

function imageByIndex(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentImageIndex = index;
  displayContainer.innerHTML = '';
  createBigImage(images[currentImageIndex]);
}

buttonL.addEventListener('click', function () {
  imageByIndex(currentImageIndex - 1);
  console.log('Image moved left');
});

buttonR.addEventListener('click', function () {
  imageByIndex(currentImageIndex + 1);
  console.log('Image moved right');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    imageByIndex(currentImageIndex - 1);
  } else if (event.key === 'ArrowRight') {
    imageByIndex(currentImageIndex + 1);
  }
});

const hideOtherElements = () => {
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
};

hideOtherElements();

function createBigImage(imgDetails) {
  displayContainer.innerHTML = '';
  const bigImage = document.createElement('img');
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;

  displayContainer.appendChild(bigImage);
}

//overflow scroll for scrolling thumbnails
