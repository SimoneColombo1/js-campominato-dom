
//* dichiarazione variabili//
const griglia= document.querySelector('main #griglia');
const StartButton= document.querySelector('header #start');




//!evento// 


StartButton.addEventListener('click',function(){
//< blacklist

//todo ciclo for//
griglia.innerHTML="";

for( let i=0 ; i<100;i++ ){



    //? creazione quadrati//
const quadrati= document.createElement('div');
quadrati.classList.add('square');



//$ creazione span con i numeri//
 
const elementi= document.createElement('span');
elementi.append(i+1);
quadrati.appendChild(elementi);

let punteggio=0;

//^ Colorare quadrati al click//

quadrati.addEventListener('click', function(){
     punteggio++;
    quadrati.classList.add('active');
    
    console.log(i+1);
    console.log(punteggio);
    
})

griglia.appendChild(quadrati);
}















}





)