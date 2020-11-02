const form = document.passengerList

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.gender.sex)
    console.log(form.city.value)

})

const checkedInputs = []
    
    for(let i = 0; i < form.dietaryrestrictions.length; i++){
        if(form.entertainment[i].checked){
            checkInputs.push(form.diestaryrestrictions[i].value)
        }
    }