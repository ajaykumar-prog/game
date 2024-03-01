
alert(" THIS IS GUESSING GAME!! Type 'quit' if want to..!")
const max=prompt("Chose any maximum number!");

const random=Math.floor(Math.random()*max) +1;

guess=prompt("Guess the number!");
while(true){
   if(guess==random){
      console.log("Holy crap! That's correct! :",random);
      console.log("ONE WITH MINIMUM TAPS WILL WIN !");
      break;
   }
   else if (guess=="quit"){
      console.log("Bowed down ,ha!");
      break;
   }
   else if (guess!=random){
      
      if(guess<random ){
         alert("it's too small!");
      }
      else if(guess>random)
         alert("it's too big");
      
      guess=prompt("Guess the number!");
   }
}
