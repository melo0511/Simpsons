const URL = "https://thesimpsonsquoteapi.glitch.me/quotes"

const character = document.getElementById('character')
const img  = document.getElementById('img')
const quote = document.getElementById('quote')
const btn = document.getElementById('btnGenerar')

btn.addEventListener('click',Api)

function Api(){
    fetch(URL)
    .then(response=>response.json())
    .then(
        data=>{
            img.setAttribute('src',(data[0].image)),
            character.textContent = data[0].character,
            quote.textContent = data[0].quote
        }
    )
}

$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });