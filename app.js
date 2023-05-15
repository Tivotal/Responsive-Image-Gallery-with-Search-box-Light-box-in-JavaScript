/* Created by Tivotal */

let searchInput = document.querySelector(".search-box input");
let images = document.querySelectorAll(".image-box");
let lightbox = document.querySelector(".lightbox");
let closeButton = document.querySelector(".closeBtn");

searchInput.addEventListener("keyup", (e) => {
  //if user clicks enter button
  if (e.key == "Enter") {
    //getting user entered search value
    let value = searchInput.value;
    //converting entered value to lowercase
    let searchValue = value.toLowerCase();

    //getting data from images
    images.forEach((image) => {
      //matching search value with image data
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

searchInput.addEventListener("keyup", () => {
  //returning if search value is not empty
  if (searchInput.value != "") return;

  //if its not empty
  images.forEach((image) => {
    image.style.display = "block";
  });
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    showLightBox(image.querySelector("img").src);
  });
});

let showLightBox = (imgSrc) => {
  lightbox.querySelector("img").src = imgSrc;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
};

closeButton.addEventListener("click", () => {
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});
