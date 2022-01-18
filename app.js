const texts = ["\\Community_", "\\Product_", "\\Programming_", "\\Memes_", "\\Startups_"];
let count = Math.floor((Math.random()*5));
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    if(letter.length === currentText.length){
        document.querySelector('.typing').textContent = letter;
    }
    else {
        document.querySelector('.typing').textContent = letter + "_";
    }
//     document.querySelector('.typing').textContent = letter + "_";
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 220);

}());
