function MathChallenge(num1,num2) { 

  // code goes here
  let number3 = num1/num2;
  number3 = number3.toFixed(4)
  let split = number3.toString().split('');
  
  if(split.length>6){
    let floatingCleared = split.slice(0,-5)
    let floatingPart = split.slice(-5);
    let forCount = 0;
    for(var x = floatingCleared.length-1; x > -1; x--){
      forCount++;
      if(forCount%3==0 & x !== 0){
        floatingCleared.splice(x,0,',')
      }
    }
    return floatingCleared.concat(floatingPart).join('')
  }
  else{
    return split.join('');
  }
}
   
// keep this function call here 
console.log(MathChallenge(readline()));