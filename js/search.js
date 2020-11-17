// var input = document.getElementById("input");
// input.addEventListener("keydown", function (e) {
//     if (e.keyCode === 13) {
//         validate(e);
//     }
// });

// function validate(e) {
// var input = document.getElementById("input").value;
// location.replace("https://www.google.com/search?q=site:www.benjaminwaterson.com" + " " + input + "");
// };
(function() {   
    var cx = '!!!!!!!!!!!!!!!!!!!';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=25d8b607b60f0155b'+ cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

window.onload = function(){
document.getElementById('gsc-i-id1').placeholder = 'SEARCH';
};