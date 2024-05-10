let button = document.getElementById("btn");
let quoteText = document.querySelector(".Quote");

button.addEventListener("click", 
async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const quote = await response.json();

  quoteText.innerHTML = ''
  let paragraphe = document.createElement('p')
  paragraphe.textContent = quote.content
  quoteText.appendChild(paragraphe) 
  paragraphe.setAttribute('class','parastyle')
});


