const searchButton = document.getElementById("search-button");
const searchBox = document.getElementsByClassName("search-input");

// searchBox.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementsByClassName("search-button").click();
//   }
// });

searchButton.addEventListener("click", search)


  function search (){
    const input = document.getElementById("search-input").value;
    window.open("http://google.com/search?q=" + input + " site:benjaminwaterson.com");
}

