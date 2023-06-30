// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з прикладів 
// бібліотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a href="${original}" class="gallery_link">
    <img class="gallery_image" src="${preview}" alt="${description}" width="340" data-source="${original}"/>
    </a>
    </li>`
).join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);
    
galleryContainer.addEventListener('click', handlerClick)

function handlerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery_image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280">`,
    {
        onShow: () => {
                window.addEventListener("keydown", handlerClose);
            },
        onClose: () => {
                window.removeEventListener("keydown", handlerClose);
            },
        });
    instance.show();

    function handlerClose(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}


