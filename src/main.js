import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImagesByQuery } from './src/js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './src/js/render-functions.js';


const refs = { formEl: document.querySelector(".form") };
refs.formEl.addEventListener('submit', e => {
    e.preventDefault();
    const value = e.currentTarget.elements['search-text'].value.trim();
    
    if (value === '') {
    iziToast.warning({ message: 'Please enter a search query' });
    return;
}

    clearGallery();
    showLoader();

    getImagesByQuery(value)
    .then(data => {
        hideLoader();
        if (data.hits.length === 0) {
            iziToast.error({
             message: 'Sorry, there are no images matching your search query. Please try again!',
             position: 'topRight',
    });
        } else {
            createGallery(data.hits);
        }
    })
    .catch(err => {
        hideLoader();
        console.log(err);
    });
    e.currentTarget.reset();
});