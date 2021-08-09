const gifButton = document.getElementById("gifButton")
const stickerButton = document.getElementById("stickerButton")
const allButton = document.getElementById("allButton")
// const gifFrame = document.getElementById("gifFrame")

gifButton.onclick = function () {
    console.log("test");
    if (gifFrame.style.display !== "none") {
        gifFrame.style.display = "none";
    } else {
        gifFrame.style.display = "flex";
    }
  };

// Sticker button action only view stickers 
stickerButton.onclick = function () {
    console.log("test");
    if (gifFrame.style.display !== "none") {
        gifFrame.style.display = "none";
    } else {
        gifFrame.style.display = "flex";
    }
  };
