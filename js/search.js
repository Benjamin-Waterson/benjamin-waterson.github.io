const input = document.getElementById("search-input").value;
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", search)

function search(){
    window.open("http://google.com/search?q=" + input + " site:benjaminwaterson.com");
    console.log(input)
}