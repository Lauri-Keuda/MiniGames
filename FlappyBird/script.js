var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var menu = document.getElementById("menu");
var jumping = 0;
var score = 0;
var gameOn = false;

function start() {
    gameOn = true;
    menu.style.display = "none";
    block.style.animation = "block 2s infinite linear";
    hole.style.animation = "block 2s infinite linear";
}

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*250)+175);
    hole.style.top = random + "px";
    score++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0 && gameOn){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop)
    if (characterTop > 460 || (blockLeft < 40) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 110))){
        character.style.top = 100 + "px";
        /* block.style.animation = "none";
        hole.style.animation = "none";
        alert("Game over.\nScore: " + score);
        block.style.animation = "block 2s infinite linear";
        hole.style.animation = "block 2s infinite linear"; */
        menu.style.display = "block";
        gameOn = false;
        block.style.animation = "none";
        hole.style.animation = "none";
        document.getElementById("score").innerHTML = "Pisteet: " + score;
        score = 0;
    }
}, 10)

function jump() {
    if (gameOn){
        jumping = 1;
        let jumpCount = 0;
        var jumpInterval = setInterval(function(){
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 6) && (jumpCount < 15)){
                character.style.top = (characterTop-5)+"px"
            }
            if (jumpCount > 25){
                clearInterval(jumpInterval)
                jumping = 0;
                jumpCount = 0;
            }
            jumpCount++;
        },10)
    }
}

function back() {
    document.location.pathname = ".."
}