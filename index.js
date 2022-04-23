let quoteElem = document.getElementById("quote");

fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
    .then((res) => res.json())
    .then(data => {
        const quote = data.quote;
        console.log(quote);
        quoteElem.textContent = quote;
})

const clickedButton = function () {
    console.log("CLicked button")
    fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
    .then((res) => res.json())
    .then(data => {
        const quote = data.quote;
        console.log(quote);
        quoteElem.textContent = quote;
})
}