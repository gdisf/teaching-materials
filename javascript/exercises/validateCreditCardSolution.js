/*
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different numbers represented (all of the numbers cannot be the same)
The final number must be even
The sum of all the digits must be greater than 33
*/

var validateCreditCard = function(creditCardNum){

  // The credit card number must be 16 digits in length
  if(creditCardNum.length !== 16){
    return false;
  }

  // All of the digits must be numbers
  for(var i = 0; i < validateCreditCard.length; i++){    
    // console.log('creditCardNum[i] ', creditCardNum[i]);
    // console.log('Number.isInteger(creditCardNum[i]) ', Number.isInteger(creditCardNum[i]));
    if(!Number.isInteger(Number(creditCardNum[i]))){ 
      return false;
    }
  }

  // The credit card number must be composted of at least two different digits (i.e. all of the digits cannot be the same)
  var obj = {};
  for(var j = 0; j < creditCardNum.length; j++){
    obj[creditCardNum[j]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(creditCardNum[creditCardNum.length - 1] % 2 !==0){
    return false;
  }

  // The sum of all the digits must be greater than 33
  var sum = 0;
  for(var k = 0; k < creditCardNum.length; k++){
      sum += Number(creditCardNum[k]);
  }
  if(sum <= 33){
    return false;
  }

  return true;
};

/**** tests *****/
// console.log(validateCreditCard('9999999988880000'));
// console.log(validateCreditCard('6666666666661666'));
// console.log(validateCreditCard('a92332119c011112'));
// console.log(validateCreditCard('4444444444444444'));
// console.log(validateCreditCard('1211111111111112'));