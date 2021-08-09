const gifButton = document.getElementById("gifButton")
const stickerButton = document.getElementById("stickerButton")
const allButton = document.getElementById("allButton")


// Gif button action only view gifs
stickerButton.onclick = function () {
    if (gifFrame.style.display !== "none") {
        gifFrame.style.display = "none";
    } else {
        gifFrame.style.display = "flex";
    }
  };

// Sticker button action only view stickers 
gifButton.onclick = function () {
    if (stickerCarousel.style.display !== "none") {
        stickerCarousel.style.display = "none";
    } else {
        stickerCarousel.style.display = "flex";
    }
  };

  // All button shows both stickers and gifs
  allButton.onclick = function () {
    if (gifFrame.style.display !== "flex") {
        gifFrame.style.display = "flex";
    } 
    if (stickerCarousel.style.display !== "flex") {
        stickerCarousel.style.display = "flex";
    }
  };
