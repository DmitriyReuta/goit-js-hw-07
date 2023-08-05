import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContainer = document.querySelector(".gallery");

function createMarkup(one) {
    return one.map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
     </a>
</li>`).join("");
}
ulContainer.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
ulContainer.addEventListener("click", openImgClick);

function openImgClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return
    }

    const mainImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${mainImg}">`);
instance.show()
}

