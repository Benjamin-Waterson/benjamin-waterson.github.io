var input = document.getElementById("input");
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
var input = document.getElementById("input").value;
location.replace(" " + input + "");
};

