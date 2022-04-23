// script

const adviceID = document.getElementById('adviceID');
const adviceText = document.getElementById('adviceText');

const diceBtn = document.getElementById('diceBtn');

diceBtn.addEventListener('click', function() {
    window.location.href = window.location.href;
});

var request = new XMLHttpRequest();

request.open('GET', 'https://api.adviceslip.com/advice');



request.onload = function () {
    var data = JSON.parse(this.response);
    var slip = data.slip;
    var id = slip.id;
    var advice = slip.advice;


    if (request.status >= 200 && request.status < 400) {
        adviceID.textContent = `ADVICE #${id}`;
        adviceText.textContent = `"${advice}"`;
    } else {
        console.log('error')
    }
    
}

request.send();