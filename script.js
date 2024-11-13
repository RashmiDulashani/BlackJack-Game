const generateSound = document.getElementById("generate-sound");
const winSound = document.getElementById("win-sound");
const lostSound = document.getElementById("lost-sound");

function main() {
    generateSound.play();

    let x;

    let confirm = document.getElementById("result").innerHTML;
    if(confirm == "You Lost!") {
        alert("Game Over");
    } else {

    do {
    x = Math.floor(Math.random() * 13);
    } while (x == 0);

    let currentScore = parseInt(document.getElementById("value").innerHTML);
    let total = currentScore + x;
    document.getElementById("value").innerHTML = total;

    if (total < 21) {
        document.getElementById("result").innerHTML = " ";
    } else if (total == 21) {
        winSound.play();
        document.getElementById("result").innerHTML = "You've Won! <br> Congratulations!";
        document.getElementById("result").style.color = "green";
        document.getElementById("restart").style.display = "block";
        document.getElementById("newCard").style.display = "none";
    } else if (total > 21) {
        lostSound.play();
        document.getElementById("result").innerHTML = "You Lost!"
        document.getElementById("result").style.color = "yellow";
        document.getElementById("restart").style.display = "block";
        document.getElementById("newCard").style.display = "none";
    }
    
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 250;

    document.getElementById("cardContainer").appendChild(img);
}
}

function restart() {
    location.reload();
}