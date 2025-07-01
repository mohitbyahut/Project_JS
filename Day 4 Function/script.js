

 function displayComputerChoice(){
    // const userChoiceMsg = 'You have choosen Bat';
      //this will generate random number 0 to 3
      let randomNumber = Math.random() * 3;
      if(randomNumber > 0 && randomNumber <= 1){
        return 'Bat';
      }else if(randomNumber > 1 && randomNumber <= 2){
        return 'Ball';
      }else {
        return 'Stump';
      }
 }

 function getResult(userMove, computerMove){
  if(userMove === 'Bat'){
    if(computerMove === 'Ball'){
      
    }
  }
 }

 