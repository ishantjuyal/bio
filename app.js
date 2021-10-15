const texts = ["\\Community", "\\Product", "\\Programming", "\\Memes", "\\Startups"];
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

    document.querySelector('.typing').textContent = letter + "_";
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 220);

}());

function changeImg() {
    let imgDiv = document.getElementsByClassName("picture");
    imgDiv.innerHTML = `<img onmouseover="changeImg()" src="/images/ishant_color.png" alt="Ishant">`;
}