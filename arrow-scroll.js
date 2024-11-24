// For scrolling vertical pages up and down faster
window.addEventListener("keydown", e => {
    const scrollOptions = {
        ArrowRight: window.innerHeight,
        ArrowLeft: -window.innerHeight
    }

    window.scrollBy(0, scrollOptions[e.key])
})