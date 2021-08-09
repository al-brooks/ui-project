// ASYNC function for fetching searched Stickers
async function fetchStickerData(STICK_URL) {
    try {
        let response = await fetch(STICK_URL)
        let stickData = await response.json()

        let stickItems = stickData.data.map((item) => {
            return `<img src="${item.images.downsized_still.url}" />`
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
            return `<img src="${item.images.downsized_still.url}" />`
        })
        gifFrame.innerHTML = gifItems.join("")
    } catch (error) {
        console.log(error)
    }
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