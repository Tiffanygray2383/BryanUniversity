const seafood = document.getElementById("seafood")
console.log(seafood)
seafood.innerHTML = "Welcome to JJ's Seafood connection"

const shrimp = document.getElementById('shrimp')
console.log(shrimp)
shrimp.innerHTML = "Shrimp Taco Tuesday"

var newList = document.createElement("li");                
var myList = document.createTextNode("myList");        
myList.appendChild(newList);                             
document.getElementById("myList").appendChild(newList);

function pagebar()
{
  var links=document.getElementById('navbar').getElementsByTagName("a");
  var current = location.href;
  for (var i=0; i < links.length; i++)
  {
   if(links[i].href == current)
   {
      links[i].href = "JJ's Seafood connection";
      links[i].className='grayStyle';
   }
 }
} 


