var officeItems = ['stapler','monitor', 'computer', 'desk', 'lamp', 'computer', 'lamp', 'stapler', 'computer', 'computer' ]
var count = 0

for (var i =0; i < officeItems.length; i++){

if(officeItems[i]==='computer')
{count++
   }
}
{
    console.log(count) // -> 4
    console.log('-----------------')
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
     name: 'Mike', 
     age: 12,
     gender: "male",

},{
    name: 'Madeline',
    age: 80,
    gender: 'female',

}, {
    name:'Cheryl',
    age: 22,
    gender: 'female',

}, {
    name: 'Sam',
    age: 30,
    gender: 'male',

}, {
    name: 'Suzy',
    age: 4,
    gender:'female',

}
]
for(var i =0; i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age<18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' ' +'is not old enough to see mad max')
    }
    else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +' ' +'is  old enough to see mad max')
         
    }
        
}
console.log('-------------------')    

for(var i =0; i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender=='male'){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' ' +'is not old enough to see mad max, dont let him in')
}  else{
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' ' +'is not old enough to see mad max, dont let her in')
}  }
    else{
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender=='male'){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +' ' +'is  old enough to see mad max, let him in')
    }else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +' ' +'is  old enough to see mad max, let her in')
    }
    }
}
console.log('----------------------------------------')


for(var i =0; i<=100;i++){
    if(i%2==0){console.log(i+' = even')}else{
        console.log(i+' = odd')
    }
}

console.log('---------------------------------')

var lightSwitch = [ 2, 3, 5, 435, 4, 3, 12 ]
var count = 0

for (var i = 0; i < lightSwitch.length; i++){

if(lightSwitch[i]==='The light is on')
{count++
   }
}
{
    console.log(count) // -> 4
    console.log('-----------------')
}
