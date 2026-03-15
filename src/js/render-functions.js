import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function createGallery(images)  {
  const galleryContainer = document.querySelector('.gallery');
    const markup = images
  .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      // Тут ти будуєш HTML-картку. 
      // Не забудь додати статистику (likes, views тощо), як вимагає ТЗ!
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${likes}</p>
            <p><b>Views</b> ${views}</p>
            <p><b>Comments</b> ${comments}</p>
            <p><b>Downloads</b> ${downloads}</p>
          </div>
        </li>`;
    })
        .join("");
    galleryContainer.innerHTML = markup;
// 3. Оновлюємо SimpleLightbox
  lightbox.refresh();
}
export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('is-hidden');
}
