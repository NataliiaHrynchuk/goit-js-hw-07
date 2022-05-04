import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listItems = galleryItems.map((galleryItem) =>
`<li class="li-item" ><img class="image" src = ${galleryItem.url} alt
 = ${galleryItem.description}/></li>`).join("");