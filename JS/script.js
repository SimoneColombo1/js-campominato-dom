
//* dichiarazione variabili//
const griglia= document.querySelector('main #griglia');
const StartButton= document.querySelector('header #start');

//!evento// 


StartButton.addEventListener('click',function(){

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



//^ Colorare quadrati al click//

quadrati.addEventListener('click', function(){
 
    quadrati.classList.add('active');

    console.log(i+1);


})

griglia.appendChild(quadrati);
}















}





)