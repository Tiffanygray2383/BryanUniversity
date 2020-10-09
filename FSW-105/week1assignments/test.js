
var shopper = {
   firstName: "Tiffany",
   lastName: "Gray",
   age: 50,
   hasCreditCard: true,
   groceryCart: ["eggs", "milk", "seafood"],// array
   shopperInformation:  function(){
      return this.firstName + " " + this.lastName + " is " + this.age + " years old, and is trying to purchase " + this.groceryCart[2];
   }
}
   
console.log(shopper.shopperInformation());