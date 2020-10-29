// declare all variables


/*Goombas: 5 Coins
Bob-ombs: 7 Coins
Cheep-cheeps: 11 Coins


var Goobas = document.getElementById('quanityGoombas');
var Bobombs = document.getElementById('quantityBobombs');
var CheepcheepsQty = document.getElementById('quantityCheepcheeps');
var submitBtn = document.getElementById('submitButton');
var outputPara = document.getElementById('totalPrice');

// generic function that takes in quantity and multiplies with appropriate price
function calcPrice(qty, price){
  return qty * price;
}

// generic function that outputs final price and amout it tickets purchased
function getMessage(qty, total){
  return outputPara.innerHTML = 'Mario Captured ' + qty + ' pest(s) and your total price is $' + total + '<br><br>' + '<button>Proceed To Checkout</button>';
}

submitBtn.addEventListener('click', function() { 

 if(GoobasQty.value === '0' && BombomsQty.value === '0'  && CheepcheepsQty.value === '0'){
   alert('Please enter the amount of pest that were caught in your home ');
 } else {
   var totalGoobas = calcPrice(GoobasQty.value, 5);
   var totalBobombs = calcPrice(BobombsQty.value, 7);
   var totalCheepcheeps = calcPrice(CheepcheepsQty.value, 11);

   var totalPrice = totalGoobas + totalBobombs + totalCheepcheeps;
   var totalTix = parseInt(GoobasQty.value) + parseInt(BobombsQty.value) + parseInt(CheepcheepsQty.value);

   getMessage(totalTix, totalPrice);
 }

}); */


// declare all variables
let goombasQty = document.getElementById('quantityGoombas');
let bobombsQty = document.getElementById('quantityBobombs');
let cheepcheepQty = document.getElementById('quantityCheepcheeps');
let submitBtn = document.getElementById('submitButton');
let outputPara = document.getElementById('totalPrice');
// generic function that takes in quantity and multiplies with appropriate price
function calcPrice(qty, price){
  return qty * price;
}
// generic function that outputs final price and amout it tickets purchased
function getMessage(qty, total){
  return outputPara.innerHTML = 'Mario Captured ' + qty + ' pest(s) and your total price is ' + total + ' coins'  + '<br><br>' + '<button>Proceed To Checkout</button>';
}
submitBtn.addEventListener('click', function() {
 if(goombasQty.value === '0' && bobombsQty.value === '0'  && cheepcheepQty.value === '0'){
   alert('Please enter the amount of pest that were captured in your home');
 } else {
   let totalgoombas = calcPrice(goombasQty.value, 5);
   let totalbobombs = calcPrice(bobombsQty.value, 7);
   let totalcheepcheep = calcPrice(cheepcheepQty.value, 11);
   let totalPrice = totalgoombas + totalbobombs + totalcheepcheep;
   let totalPest = parseInt(goombasQty.value) + parseInt(bobombsQty.value) + parseInt(cheepcheepQty.value);
   getMessage(totalPest, totalPrice);
 }
});