// ASYNC function for fetching searched Stickers
async function fetchStickerData(STICK_URL) {
    try {
        let response = await fetch(STICK_URL)
        let stickData = await response.json()

        let stickItems = stickData.data.map((item) => {
            return `<img src="${item.images.downsized_still.url}" hover_url="${item.images.downsized_medium.url}" unhover_url="${item.images.downsized_still.url}" onmouseover="hover(this)" onmouseout="unhover(this)"/>`
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
            return `<img src="${item.images.downsized_still.url}" hover_url="${item.images.downsized_medium.url}" unhover_url="${item.images.downsized_still.url}" 
            embed_url="${item.embed_url}" onmouseover="hover(this)" onmouseout="unhover(this) onclick="displayEmbedUrl(this)"/>`
        })
        gifFrame.innerHTML = gifItems.join("")
    } catch (error) {
        console.log(error)
    }
}

function hover(image) {
    let hover_url = image.getAttribute("hover_url")
    console.log(hover_url)
    image.setAttribute('src', `${hover_url}`)
}

function unhover(image) {
    let unhover_url = image.getAttribute("unhover_url")
    console.log(unhover_url)
    image.setAttribute('src', `${unhover_url}`)
}

function displayEmbedUrl(image) {
    let embed_url = image.getAttribute("embed_url")
    mainContent.innerHTML = `<iframe src="${embed_url}" width="50%" height="50%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
}

// Variables for HTML 
const textboxButtonForm = document.getElementById("textButtonForm")
const wordTextBox = document.getElementById("wordTextBox")
const gifFrame = document.getElementById("gifFrame")
const stickerCarousel = document.getElementById("stickerCarousel")
const limitDisplay = 10

const STICK_RANDOM_URL = `https://api.giphy.com/v1/stickers/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$happy&limit=${limitDisplay}&offset=0&rating=g&lang=en`
const GIF_RANDOM_URL = `https://api.giphy.com/v1/gifs/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=$happy&limit=${limitDisplay}&offset=0&rating=g&lang=en`


// Initial page load: Calling ASYNC functions to fetch random stickers/gifs for the landing page
fetchStickerData(STICK_RANDOM_URL)
fetchGifData(GIF_RANDOM_URL)


// When the user click the search button    - Eventlistener for <form> tag for validation
textboxButtonForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const keyword = wordTextBox.value

    const STICK_SEARCH_URL = `https://api.giphy.com/v1/stickers/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`
    const GIF_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=ETsIe95S9ra8O2xYkHRPGcwr1X49fBN4&q=${keyword}&limit=${limitDisplay}&offset=0&rating=g&lang=en`

    // Calling ASYNC functions
    fetchStickerData(STICK_SEARCH_URL)
    fetchGifData(GIF_SEARCH_URL)

})