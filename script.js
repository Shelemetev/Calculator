const inputExport = document.getElementById("export")
const currency = document.querySelector(".currency")
const numberInput = document.querySelectorAll('.form-control')
const form = document.querySelector(".form")

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

const radio = type => ['radio'].includes(type);
const currencyBlock = document.querySelector('.currency-block')
const recyclingCollectionBlock = document.querySelector('.recycling-collection')

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault()

    const fields = document.querySelectorAll('input, select')
    const values = {}

    fields.forEach(field => {
        const {name,value,type,checked} = field

        values[name] = radio(type) ? checked : value
    })

    console.log(values);

    if (values.export === "1") {
        let resultCurrency = parseInt(values.currency) * 0.55
        currencyBlock.innerHTML = Math.round(resultCurrency)
    } else if (values.export === "2") {
        let resultCurrency = parseInt(values.currency) * 11.97
        currencyBlock.innerHTML = Math.round(resultCurrency)
    } else if (values.export === "3") {
        let resultCurrency = parseInt(values.currency) * 0.0638
        currencyBlock.innerHTML = Math.round(resultCurrency)
    }

    if (values.flexRadioDefault === false) {
        if (values.year === '1') {
            recyclingCollectionBlock.innerHTML = Math.round(20000 * 0.17)
        } else {
            recyclingCollectionBlock.innerHTML = Math.round(20000 * 0.26)
        }
    } else {
        if (values.year === '1') {
            if (values.volume < 1000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 1.42)
            } else if (values.volume >= 1000 && values.volume < 2000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 2.21)
            } else if (values.volume >= 2000 && values.volume < 3000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 4.22)
            } else if (values.volume >= 3000 && values.volume < 3500) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 5.73)
            } else if (values.volume >= 3500) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 9.08)
            } 
        } else {
            if (values.volume < 1000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 5.3)
            } else if (values.volume >= 1000 && values.volume < 2000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 8.26)
            } else if (values.volume >= 2000 && values.volume < 3000) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 16.12)
            } else if (values.volume >= 3000 && values.volume < 3500) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 28.5)
            } else if (values.volume >= 3500) {
                recyclingCollectionBlock.innerHTML = Math.round(20000 * 35.01)
            } 
        }
    }
})

