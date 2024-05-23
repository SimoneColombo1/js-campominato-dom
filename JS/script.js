
//* dichiarazione variabili//
const griglia= document.querySelector('main #griglia');
const StartButton= document.querySelector('header #start');




//!evento// 


StartButton.addEventListener('click',function(){
//< blacklist
let blacklist=[ 12,71,82,94,60,31,80];
//todo ciclo for//
griglia.innerHTML="";
//> Creazione Bombe
let Bombe=[];


for(let g=0; g<16;g++){
    let bomb= Math.floor(Math.random()*100);
    if(bomb != blacklist[g]){
     Bombe.push(bomb);

    }
}

console.log(Bombe);



for( let i=0 ; i<100;i++ ){



    //? creazione quadrati//
const quadrati= document.createElement('div');
quadrati.classList.add('square');



//$ creazione span con i numeri//
 
const elementi= document.createElement('span');
elementi.append(i+1);
quadrati.appendChild(elementi);

//^ Colorare quadrati al click//
let punteggio=0;
quadrati.addEventListener('click', function(){
    
     if(quadrati[i]===Bombe[i]){
        alert('hai perso');    
        quadrati.classList.add('lose');
        griglia.innerHTML="";
         


     }
    
    else {
        punteggio++;
        quadrati.classList.add('active');
        console.log(punteggio);
        console.log(i+1);
        
   

    }
        if(punteggio > 84){
            alert('hai vinto');
                 griglia.innerHTML="";

        }
})








griglia.appendChild(quadrati);
}




    
    
    
    
    

    
  
})

















