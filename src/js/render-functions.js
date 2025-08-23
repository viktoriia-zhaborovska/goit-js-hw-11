import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function createGallery(images) {
  const markup = images
    .map(
      image => `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${image.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${image.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${image.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`
    )
    .join('');

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", { 
        captionsData: "alt", 
        captionDelay: 150, 
    animationSpeed: 350,
    // rtl: true,
    widthRatio: 0.9,
});
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
} 