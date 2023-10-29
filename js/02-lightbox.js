import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

const galleryElements = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryElements);

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const originalImageURL = event.target.parentElement.getAttribute('href');
  openModal(originalImageURL, event.target.alt);
}

let lightbox = null;

function openModal(imageURL, imageAlt) {
  lightbox = new SimpleLightbox(`.${galleryList.className} a`, {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.on('show.simplelightbox', () => {
    document.addEventListener('keydown', onKeyPress);
  });

  lightbox.on('close.simplelightbox', () => {
    document.removeEventListener('keydown', onKeyPress);
  });

      lightbox.fromURL(imageURL);
    
}

function onKeyPress(event) {
  if (event.key === 'Escape') {
    lightbox.close();
  }
}


