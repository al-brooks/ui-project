// ASYNC function for fetching searched Stickers
async function fetchStickerData(STICK_URL) {
    try {
        let response = await fetch(STICK_URL)
        let stickData = await response.json()

        let stickItems = stickData.data.map((item) => {
            return `<img src="${item.images.downsized_still.url}" hover_url="${item.images.downsized_medium.url}" unhover_url="${item.images.downsized_still.url}" embed_url="${item.embed_url}" onmouseover="hover(this)" onmouseout="unhover(this)" onclick="displayEmbedUrl(this)"/>`
        })
        stickerCarousel.innerHTML = stickItems.join("")
    } catch (error) {
        console.log(error)
    }
}

// ASYNC function for fetching searched Gifs
async function fetchGifData(GIF_URL) {
    try {
        let response = await fetch(GIF_URL)
        let gifData = await response.json()

        let gifItems = gifData.data.map((item) => {
            return `<img src="${item.images.downsized_still.url}" hover_url="${item.images.downsized_medium.url}" unhover_url="${item.images.downsized_still.url}" embed_url="${item.embed_url}"
            title="${item.title}" onmouseover="hover(this)" onmouseout="unhover(this)" onclick="displayEmbedUrl(this)"/>`
        })
        gifFrame.innerHTML = gifItems.join("")
    } catch (error) {
        console.log(error)
    }
}

function resetAttributes() {
    gifFrame.removeAttribute("style")
    stickerCarousel.removeAttribute("style")
    mobileCategoryBtns.removeAttribute("style")
    embedUrlDisplay.style.display = "none"
}

function hover(image) {
    let hover_url = image.getAttribute("hover_url")
    image.setAttribute('src', `${hover_url}`)
}

function unhover(image) {
    let unhover_url = image.getAttribute("unhover_url")
    image.setAttribute('src', `${unhover_url}`)
}

function displayEmbedUrl(image) {
    if (embedUrlDisplay.style.display === "none") {
        embedUrlDisplay.removeAttribute("style")
    }
    let embed_url = image.getAttribute("embed_url")
    let title = image.getAttribute("title")
    embedUrlDisplay.innerHTML = `<div id="parentDiv">
        <header id="header">
            <button id="backButton" onClick="window.location.reload();">Back</button>
        </header>
        
        <div id="iframeContainer">
        <h2>${title}</h2>
            <iframe src="${embed_url}" width="50%" height="50%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    </div>`;
    mobileCategoryBtns.style.display = "none"
    stickerCarousel.style.display = "none"
    gifFrame.style.display = "none"
}


// Variables for HTML 
const textboxButtonForm = document.getElementById("textButtonForm")
const embedUrlDisplay = document.getElementById("embedUrlDisplay")
const wordTextBox = document.getElementById("wordTextBox")
const gifFrame = document.getElementById("gifFrame")
const stickerCarousel = document.getElementById("stickerCarousel")
const mobileCategoryBtns = document.getElementById("mobileCategoryBtns")
const gifButton = document.getElementById("gifButton")
const stickerButton = document.getElementById("stickerButton")
const allButton = document.getElementById("allButton")
const sideBtns = document.getElementsByClassName("sideBtns")

const limitDisplaySticker = 8
const limitDisplay = 10

const STICK_INIT_URL = `https://api.giphy.com/v1/stickers/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$welcome&limit=${limitDisplaySticker}&offset=0&rating=g&lang=en`
const GIF_INIT_URL = `https://api.giphy.com/v1/gifs/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$welcome&limit=${limitDisplay}&offset=0&rating=g&lang=en`


// Initial page load: Calling ASYNC functions to fetch random stickers/gifs for the landing page
fetchStickerData(STICK_INIT_URL)
fetchGifData(GIF_INIT_URL)


// Sidebar button calls
for (let i = 0; i < sideBtns.length; i++) {
    if (sideBtns[i].innerText === 'Trending') {
        sideBtns[i].addEventListener('click', function() {
            const STICK_TREND_URL = `https://api.giphy.com/v1/stickers/trending?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&limit=${limitDisplay}&rating=g`

            const GIF_TREND_URL = `https://api.giphy.com/v1/gifs/trending?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&limit=${limitDisplay}&rating=g`

            resetAttributes()
            fetchStickerData(STICK_TREND_URL)
            fetchGifData(GIF_TREND_URL)
        })
    } else {
        sideBtns[i].addEventListener('click', function() {
            let keyword = sideBtns[i].innerText;

            let stick_url = `https://api.giphy.com/v1/stickers/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`

            let gif_url = `https://api.giphy.com/v1/gifs/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`

            resetAttributes()
            fetchStickerData(stick_url)
            fetchGifData(gif_url)
        })
    }
}


// When the user click the search button    - Eventlistener for <form> tag for validation
textboxButtonForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const keyword = wordTextBox.value

    const STICK_SEARCH_URL = `https://api.giphy.com/v1/stickers/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`
    const GIF_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`

    // Calling ASYNC functions
    resetAttributes()
    fetchStickerData(STICK_SEARCH_URL)
    fetchGifData(GIF_SEARCH_URL)
})