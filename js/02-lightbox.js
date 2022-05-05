import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href = ${original}><img class="gallery__image" src = ${preview} alt
 = ${description}/></a>`).join("");

imageContainer.insertAdjacentHTML("afterbegin", markup);
// imageContainer.addEventListener('click', changeCrsImages);

     
let gallery = new SimpleLightbox('.gallery a', {
    overlayOpasity: 0.8,
    fadeSpeed: 250,
    captionsData: 'alt',
    
});
  
gallery.on('show.SimpleLightbox', function (e) {
    sourceAttr: 'href';
});



