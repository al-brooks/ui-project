const gifButton = document.getElementById("gifButton")
const stickerButton = document.getElementById("stickerButton")
const allButton = document.getElementById("allButton")


// Gif button action only view gifs
gifButton.onclick = function () {
   gifFrame.style.display = "flex";
   stickerCarousel.style.display = "none"
    
  };

// Sticker button action only view stickers 
stickerButton.onclick = function () {
    stickerCarousel.style.display = "flex"
    gifFrame.style.display = "none";
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
