
document.addEventListener("DOMContentLoaded", function(){
    const screenDisplay = document.getElementById('screen');
    const spans = document.querySelectorAll('.buttons span');
    const spanArray = Array.from(spans);
    document.querySelectorAll('.operator')[1].innerText= '/'; 
    document.querySelectorAll('.operator')[2].innerText= '*'; 
    /*I added the <div> and placed <span> inside of them to have them each pull from the QuerySelctorAll whcih I thought would have pulled all of each span. However, this assignment is not completed accurate as the result is not a calculator.*/
    
spanArray.map(button => button.addEventListener('click', function(){
    if (button.inner !== "=") {
        screenDisplay.innerText += button.innerText
    };
    if (button.innerText === "=") {
        screenDisplay.innerText = eval
        (screenDisplay.innerText)
    };
    if (button.innerText === "C") {
        screenDisplay.innerText =""
    };
}
))
})