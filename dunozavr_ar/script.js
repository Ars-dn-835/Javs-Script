const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactusR = document.getElementById("cactusR");

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout( function(){
        dino.classList.remove("jump");
    }, 5000);

}

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cactusRLeft = parseInt(window.getComputedStyle(cactusR).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 ) {
        alert("Гру закінчено!!!");
    }
    if(cactusRLeft < 50 && cactusRLeft > 0 && dinoTop >= 140 ) {
        alert("Гру закінчено!!!");
    }
}, 100);