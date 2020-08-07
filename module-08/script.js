import gallery from './gallery-items.js';

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.js-gallery');

let galleryItems = '';
gallery.forEach(
  galleryItem =>
    (galleryItems += `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>
`),
);

galleryList.innerHTML = galleryItems;

// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.

const lightboxElem = document.querySelector('.js-lightbox');
const getBigImgUrl = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  console.log(event.target.getAttribute('data-source'));
  lightboxElem.classList.add('is-open');
};

galleryList.addEventListener('click', getBigImgUrl);

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку button[data - action= "close-modal"].

// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
