import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);


galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const originalImageURL = event.target.parentElement.getAttribute('href');
  openModal(originalImageURL, event.target.alt);
}

function openModal(imageURL, imageAlt) {
  const lightbox = new SimpleLightbox(`.${galleryList.className} a`, {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.load(imageURL, imageAlt);
}







