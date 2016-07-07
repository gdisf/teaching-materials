var carts = {
  brenda: { 
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01"
    },
  claire: {
    "apple": "0.60",
    "nalgene": "10.34",
    "protein_shake": "22.36"
    }
};


function cashRegister(cart){
  var people = Object.keys(cart); // array of the carts keys, which are people  
  var items = []; // array of the each people keys, which are items  
  var result = [];
  
  for (var i = 0; i < people.length; i++) {
    // for each person grab the every item
    items[i] = Object.keys(cart[people[i]]); 
  }

  var i = 0;
  var j = 0;
  var sum = 0;

  while(i < people.length){
  // grab the price of every item for a particular person 
    // person is represented by cart[people[i]]
    // items held by a person are items[i][j]
  //and add to the total
    sum += Number(cart[people[i]][items[i][j]]); // this doesn't work because we have the same currency problem (removing the $)

    if(j < items[i].length -1){
      j++;
    } else {
      j = 0;
      i++;
      result.push(sum);
      sum = 0;
    }
  }

  return result;
}

/************* test ************/
console.log(cashRegister(carts));