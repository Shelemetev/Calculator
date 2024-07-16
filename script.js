const inputExport = document.getElementById("export")
const currency = document.querySelector(".currency")
const numberInput = document.querySelectorAll('.form-control')
const form = document.querySelector(".form")


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
const fee = document.querySelector('.fee')
const result = document.querySelector('.result')

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault()

    const fields = document.querySelectorAll('input, select')
    const values = {}

    fields.forEach(field => {
        const {name,value,type,checked} = field

        values[name] = radio(type) ? checked : value
    })

    console.log(values);

    let count = 0

    if (values.export === "1") {
        let resultCurrency = parseInt(values.currency) * 0.555
        currencyBlock.innerHTML = Math.round(resultCurrency)
        count = Math.round(resultCurrency)
        
    } else if (values.export === "2") {
        let resultCurrency = parseInt(values.currency) * 11.97
        currencyBlock.innerHTML = Math.round(resultCurrency)
        count = Math.round(resultCurrency)
    } else if (values.export === "3") {
        let resultCurrency = parseInt(values.currency) * 0.0638
        currencyBlock.innerHTML = Math.round(resultCurrency)
        count = Math.round(resultCurrency)
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

    if (values.year === "1") {
        if (count < 325000) {
            let end = count * 0.54
            if (end < values.volume * 2.5 * 95.7849) {
                fee.innerHTML = values.volume * 2.5 * 95.7849
            } else {
                fee.innerHTML = end
            }
        } else if (count >= 325000 && count < 650000) {
            let end = count * 0.48
            if (end < values.volume * 3.5 * 95.7849) {
                fee.innerHTML = values.volume * 3.5 * 95.7849
            } else {
                fee.innerHTML = end
            }
        } else if (count >= 650000 && count < 1650000) {
            let end = count * 0.48
            if (end < values.volume * 5.5 * 95.7849) {
                fee.innerHTML = values.volume * 5.5 * 95.7849
            } else {
                fee.innerHTML = end
            }
        } else if (count >= 1650000 && count < 3250000) {
            let end = count * 0.48
            if (end < values.volume * 7.5 * 95.7849) {
                fee.innerHTML = values.volume * 7.5 * 95.7849
            } else {
                fee.innerHTML = end
            }
        } else if (count >= 3250000 && count < 6500000) {
            let end = count * 0.48
            if (end < values.volume * 15 * 95.7849) {
                fee.innerHTML = values.volume * 15 * 95.7849
            } else {
                fee.innerHTML = end
            }
        } else if (count >= 6500000) {
            let end = count * 0.48
            if (end < values.volume * 20 * 95.7849) {
                fee.innerHTML = values.volume * 20 * 95.7849
            } else {
                fee.innerHTML = end
            }
        }         
            
    } else if (values.year === "2") {
        if (values.volume < 1000) {
            fee.innerHTML = values.volume * 1.5 * 95.7849
        } else if (values.volume >= 1000 && values.volume < 1500) {
            fee.innerHTML = values.volume * 1.7 * 95.7849
        } else if (values.volume >= 1500 && values.volume < 1800) {
            fee.innerHTML = values.volume * 2.5 * 95.7849
        } else if (values.volume >= 1800 && values.volume < 2300) {
            fee.innerHTML = values.volume * 2.7 * 95
        }else if (values.volume >= 2300 && values.volume < 3000) {
            fee.innerHTML = values.volume * 3 * 95.7849
        } else if (values.volume >= 3000) {
            fee.innerHTML = values.volume * 3.6 * 95.7849
        }        
    } else if (values.year === "3") {
        if (values.volume < 1000) {
            fee.innerHTML = values.volume * 3 * 95.7849
        } else if (values.volume >= 1000 && values.volume < 1500) {
            fee.innerHTML = values.volume * 3.2 * 95.7849
        } else if (values.volume >= 1500 && values.volume < 1800) {
            fee.innerHTML = values.volume * 3.5 * 95.7849
        } else if (values.volume >= 1800 && values.volume < 2300) {
            fee.innerHTML = values.volume * 4.8 * 95.7849
        } else if (values.volume >= 2300 && values.volume < 3000) {
            fee.innerHTML = values.volume * 5 * 95.7849
        } else if (values.volume >= 3000) {
            fee.innerHTML = values.volume * 5.7 * 95.7849
        }        
    } 

    result.innerHTML = `ИТОГО: ${parseInt(fee.textContent) + parseInt(currencyBlock.textContent) + parseInt(recyclingCollectionBlock.textContent)}`
    console.log(fee.value);
})

