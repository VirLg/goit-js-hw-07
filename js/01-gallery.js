import {galleryItems}  from './gallery-items.js';
// Change code below this line
const markupDiv = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc+
    `
    <li>
         <div class="gallery__item">
           
             <img
                class="gallery__image"
               src="${preview}"
               data-source="large-image.jpg"
               alt="${description}" width ="200px">
             
           
         </div>
       </li>
    `
    ,
    '')
markupDiv.insertAdjacentHTML("beforeend",markup)

// console.log(galleryItems);