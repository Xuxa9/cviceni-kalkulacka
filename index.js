const displayE1 = document.querySelector(".display")

const handleDigitClick = (e) => {
if (displayE1.textContent.length <= 9) {
    
    const number = Number(e.target.textContent)

    displayE1.textContent += number
} else {
    return
}
   
}

document.querySelector("#btn-9").addEventListener("click", handleDigitClick)
document.querySelector("#btn-8").addEventListener("click", handleDigitClick)
document.querySelector("#btn-7").addEventListener("click", handleDigitClick)
document.querySelector("#btn-6").addEventListener("click", handleDigitClick)
document.querySelector("#btn-5").addEventListener("click", handleDigitClick)
document.querySelector("#btn-4").addEventListener("click", handleDigitClick)
document.querySelector("#btn-3").addEventListener("click", handleDigitClick)
document.querySelector("#btn-2").addEventListener("click", handleDigitClick)
document.querySelector("#btn-1").addEventListener("click", handleDigitClick)
document.querySelector("#btn-0").addEventListener("click", handleDigitClick)

// bonus jako screen obrazovky