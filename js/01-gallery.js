import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', () => {
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
  image.setAttribute('data-source', item.original);

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

  const originalImageURL = event.target.dataset.source;
  openModal(originalImageURL);
}
const modal = basicLightbox.create(`
  <img width="800" height="600">
`);

function openModal(imageURL) {
  modal.element().querySelector('img').src = imageURL;
  modal.show();
}
window.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modal.close();
    }
})
console.log(galleryItems);
