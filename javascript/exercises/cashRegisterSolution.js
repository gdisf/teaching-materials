function cashRegister(cart){
  var people = Object.keys(cart); // array of people  
  var cartItems = []; // array of items in each person's cart.
  var result = [];
  
  for (var i = 0; i < people.length; i++) {
    // for each person grab all item
    cartItems[i] = Object.keys(cart[people[i]]);
    // Note, this makes cart items a nested array (ie [[ 'banana', 'blueberry']['peacans', 'pistacio']] ). The array of items at index i belongs to the person at index i in the people array. 
  }

  var i = 0;
  var j = 0;
  var sum = 0;

  while(i < people.length){
  // grab the price of every item for a particular person 
    // person is represented by cart[people[i]]
    // cartItems held by a person are cartItems[i][j]
  //and add to the total
    sum += Number(cart[people[i]][cartItems[i][j]]); 

    if(j < cartItems[i].length - 1){
      j++;
    } else {
      j = 0;
      result.push([people[i], sum]);
      i++;
      sum = 0;
    }
  }

  return result;
}


/************* test ************/
var carts = {
  brenda: { 
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01"
    },
  claire: {
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
    }
};

console.log(cashRegister(carts)); //[ [ 'brenda', 27.25 ], [ 'claire', 33.3 ] ]