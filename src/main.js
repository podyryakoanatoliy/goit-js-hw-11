


import { OnShowError, onSearchPhotoFromText } from './js/pixabay-api';
import { onCreateGalleryPhoto } from './js/render-functions';

const cssLoadAnimation = document.querySelector('.loader');
const inputQuery = document.querySelector('.my-input');
const btnSbm = document.querySelector('.form-btn');

btnSbm.addEventListener('click', handleClick);

function handleClick(evt) {
  cssLoadAnimation.style.display = 'inline-block';
  evt.preventDefault();

  let queryData = inputQuery.value.replace(/\s+/g, '+').toLowerCase();

  onSearchPhotoFromText(queryData)
    .then(data => {
      cssLoadAnimation.style.display = 'none';
      data.totalHits === 0 ? OnShowError(data) : onCreateGalleryPhoto(data);  // Використовуємо onCreateGalleryPhoto
    })
    .catch(OnShowError)
    .finally(() => {
      inputQuery.value = '';
    });
}