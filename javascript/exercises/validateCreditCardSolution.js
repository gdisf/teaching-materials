/*
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different numbers represented (all of the numbers cannot be the same)
The final number must be even
The sum of all the digits must be greater than 33
*/

var validateCreditCard = function(creditCardNum){
  
  //Remove dashes from creditCardNum string
  var ccNumberNoDashes = '';
  for (var h = 0; h < creditCardNum.length; h++) {
    if(creditCardNum[h] !== '-'){
      ccNumberNoDashes += creditCardNum[h];
    }
  }

  // The credit card number must be 16 digits in length
  if(ccNumberNoDashes.length !== 16){
    return false;
  }
  console.log(ccNumberNoDashes)

  // All of the digits must be numbers
  for(var i = 0; i < ccNumberNoDashes.length; i++){    
    if(!Number.isInteger(Number(ccNumberNoDashes[i]))){ 
      return false;
    }
  }

  // The credit card number must be composted of at least two different digits (i.e. all of the digits cannot be the same)
  var obj = {};
  for(var j = 0; j < ccNumberNoDashes.length; j++){
    obj[ccNumberNoDashes[j]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !==0){
    return false;
  }

  // The sum of all the digits must be greater than 33
  var sum = 0;
  for(var k = 0; k < ccNumberNoDashes.length; k++){
    sum += Number(ccNumberNoDashes[k]);
  }
  if(sum <= 33){
    return false;
  }

  return true;
};

/**** tests *****/
console.log(validateCreditCard('9999-9999-8888-0000')); //true
console.log(validateCreditCard('6666-6666-6666-1666')); //true
console.log(validateCreditCard('a923-3211-9c01-1112')); //false
console.log(validateCreditCard('4444-4444-4444-4444')); //false
console.log(validateCreditCard('1211-1111-1111-1112')); //false
