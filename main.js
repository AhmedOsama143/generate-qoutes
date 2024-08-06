let quote = document.getElementById('quote')
let author = document.getElementById('author')
let btn = document.getElementById('btn')
let url = 'https://api.quotable.io/random'




window.onload = function(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        quote.innerText = data.content
        author.innerText = data.author
    })
}
btn.addEventListener("click",()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
        quote.innerText = data.content
        author.innerText = data.author
    })
})


