const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']
 
function loop (){
    for (i = 0; i < names.length; i++) {
    var person = document.createElement('p')
    person.textContent = names[i]
    document.body.append(person)

    }
}
console.log(names[0])
loop()


function test(){
    for (i = 0; i < 10; i++) {
  var phone = document.createElement('h1')
        phone.style.color = 'purple'
        phone.textContent = 'Hello World'
        document.body.append(phone)
    }

}
test()