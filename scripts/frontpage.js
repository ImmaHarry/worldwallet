const frontBG = document.querySelector(".sectionOne");
const frontBGs = ['../assets/pagebgs/bg1.png','../assets/pagebgs/bg2.png','../assets/pagebgs/bg3.png','../assets/pagebgs/bg4.png','../assets/pagebgs/bg5.png','../assets/pagebgs/bg6.png']
const quotesClass = document.querySelector(".quotes")
const quotes = ["../assets/quotes/QuoteCard1.png","../assets/quotes/QuoteCard2.png","../assets/quotes/QuoteCard3.png",
"../assets/quotes/QuoteCard4.png","../assets/quotes/QuoteCard5.png","../assets/quotes/QuoteCard6.png"]
const imageRev = document.querySelector(".reviewImg")
const reviews = ["../assets/reviews/r1.png","../assets/reviews/r2.png","../assets/reviews/r3.png","../assets/reviews/r4.png",
"../assets/reviews/r5.png","../assets/reviews/r6.png"]

window.onload = function() {
    const randomN = Math.floor(Math.random() * (frontBGs.length))
    const randomN2 = Math.floor(Math.random() * (quotes.length))
    const randomN3 = Math.floor(Math.random() * (reviews.length))
    frontBG.style.backgroundImage = `url('${frontBGs[randomN]}')`
    quotesClass.src = `${quotes[randomN2]}`
    imageRev.src = `${reviews[randomN3]}`
}

setInterval(() => {
    const randomN = Math.floor(Math.random() * (frontBGs.length))
    const randomN2 = Math.floor(Math.random() * (quotes.length))
    const randomN3 = Math.floor(Math.random() * (reviews.length))
    quotesClass.src = `${quotes[randomN2]}`
    frontBG.style.backgroundImage = `url('${frontBGs[randomN]}')`
    imageRev.src = `${reviews[randomN3]}`
}, 4000);