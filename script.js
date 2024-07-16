const inputExport = document.getElementById("export")
const currency = document.querySelector(".currency")
const numberInput = document.querySelectorAll('.form-control')

numberInput.forEach(element => {
    element.addEventListener('change', () => {
        if (element.value < 1) {
            element.value = 1
        }
    })
})

inputExport.addEventListener("change", () => {
    if (inputExport.value === "1" || inputExport.value === "2") {
        currency.innerHTML = "¥"
    } else {
        currency.innerHTML = "₩"
    }
})

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault()
    validation(this)
})

