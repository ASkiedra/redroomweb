var nuotraukos = [`main_page_bg.jpg`, `cairoli.jpg`, `sovet_slim.jpg`];
var tekstai = ['PIANCA', 'NICOLINE', 'SOVET']

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var choice, oldChoice;
setInterval(function () {
    while (choice === oldChoice)
{
     choice = getRandomInt(3);
}

    document.getElementsByClassName('container')[0].style.cssText = `  -moz-transition: background-image 1000ms linear;
    -o-transition: background-image 1000ms linear;
    -ms-transition: background-image 1000ms linear;
    transition: background-image 1000ms linear;height: 100vh; background: url(` + nuotraukos[choice] + `); background-size: cover; overflow: hidden; transition: 0.5s; -webkit-transition: background-color 1000ms linear;
   `;

    document.getElementById('content-text').innerHTML = tekstai[choice];

     oldChoice = choice;
}
    , 5111);

