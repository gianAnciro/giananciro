const images = [
  "https://source.unsplash.com/random/300x200/?peace",
  "https://source.unsplash.com/random/300x200/?love",
  "https://source.unsplash.com/random/300x200/?nature"
];

const gallery = document.getElementById("gallery");

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function updateGallery() {
  if (gallery) {
    const img = document.createElement("img");
    img.src = getRandomImage();
    img.alt = "Random Image from Unsplash";
    img.onload = () => {
      const oldImg = gallery.querySelector('img');
      if (oldImg) {
        oldImg.classList.remove('visible');
        setTimeout(() => {
          gallery.innerHTML = "";
          gallery.appendChild(img);
          setTimeout(() => img.classList.add('visible'), 10); // Delay to trigger transition
        }, 1000); // Match the duration of the transition
      } else {
        gallery.appendChild(img);
        setTimeout(() => img.classList.add('visible'), 10); // Delay to trigger transition
      }
    };
  }
  setTimeout(updateGallery, 3000); // Change image every 3 seconds
}

updateGallery();

