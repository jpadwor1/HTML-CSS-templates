let number = document.getElementById("number");
let counter = 0;

setInterval (() => {
    if (counter < 90){
    counter += 1;
    number.innerHTML = counter + "%";
    } else {
        number.innerHTML = "90%"
    }

}, 35);

