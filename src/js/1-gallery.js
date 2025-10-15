import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divgalEl = document.querySelector('.gallery');
const newStructEl = galleryItems.map((elem) => `
<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}"
      data-source="${elem.original}" alt="${elem.description}" />
  </a>
</li>`).join("");
divgalEl.insertAdjacentHTML("beforeend", newStructEl);

let gallery = new SimpleLightbox('.gallery a', {
    enableKeyboard: true,
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
});
