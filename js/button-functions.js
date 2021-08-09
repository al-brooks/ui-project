const gifButton = document.getElementById("gifButton")
// const gifFrame = document.getElementById("gifFrame")

gifButton.onclick = function () {
    console.log("test");
    if (gifFrame.style.display !== "none") {
        gifFrame.style.display = "none";
    } else {
        gifFrame.style.display = "flex";
    }
  };