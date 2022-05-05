import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
`<div class="gallery__item><a class="gallery__link" href = ${original}><img class="gallery__image" src = ${preview} data-source = ${original} alt
 = ${description}/></a></div>`).join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', changeCrsImages);

function changeCrsImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const changeImages = event.target.dataset.source;
    
    showChangedImg(changeImages);
    };


function showChangedImg(event) {
     
    const instance = basicLightbox.create(`<img src="${event}">`, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscDown);
         },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscDown);
        },
    });
   
    instance.show();

    function onEscDown(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}

