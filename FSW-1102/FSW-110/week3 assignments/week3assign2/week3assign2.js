
function test(){
    for (i = 0; i < 5; i++) {
  var phone = document.createElement('h2')
        phone.style.color = 'cornflowerblue'
        phone.style.fontSize = '20px'
        phone.style.fontWeight = 'lighter'
        phone.style.fontFamily = 'sans-serif'
        phone.classList = 'border'
        phone.textContent = 'Hello World'
        document.body.append(phone)
    }

}
test()

