const africa = document.getElementById("africa")
console.log(africa)
africa.innerHTML = "Welcome to my JS site"

const lemonade = document.getElementById('lemonade')
console.log(lemonade)
lemonade.innerHTML = "All of this was created with Javascript"

var newList = document.createElement("li");                
var myList = document.createTextNode("myList");        
myList.appendChild(newList);                             
document.getElementById("myList").appendChild(newList);


