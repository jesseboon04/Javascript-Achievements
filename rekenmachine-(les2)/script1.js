'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let Aftrekken = document.getElementById('aftrekken');
    let Vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let Delen = document.getElementById('delen');
    mijnButton.addEventListener('click', function(){
        // lees de waarden van de text input velden in 
        // let op DIT ZIJN STRINGS
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        Optel(getal1,getal2);
        Vermenigvuldig(getal1,getal2);
        deel(getal1,getal2)
        trekaf(getal1,getal2)
    })
     function Optel(getal1, getal2){
        let antwoord = getal1 + getal2;// doe de bewerking
        console.log("optellen " + antwoord); // laat ook in de console zien
        optellen.innerHTML = antwoord; // schrijf naar HTML
    }
     function trekaf(getal1, getal2){
        let antwoord = getal1 - getal2; 
        console.log("aftrekken" + antwoord); 
        aftrekken.innerHTML = antwoord; 
    }
    function Vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;// doe de bewerking
        console.log("vermenigvuldigen " + antwoord); // laat ook in de console zien
        vermenigvuldigen.innerHTML = antwoord; // schrijf naar HTML
    }
     function deel(getal1, getal2){
        let antwoord = getal1 / getal2;
        console.log("delen" + antwoord);
        delen.innerHTML = antwoord;      
    }