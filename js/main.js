// Írj egy függvénykifejezést a main.js fájlban, arrow function segítségével, a függvény neve handleClick legyen!
// A handleClick függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, amely kattintásra kiírja a gomb szövegét a konzolra.
// A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőket!

'use strict'

const handleClick = () => {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            console.log(buttons[i].innerText);
        });
    }
};