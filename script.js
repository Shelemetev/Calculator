const valueItem = document.querySelectorAll('.valute__select-item')
const inputExport = document.getElementById("export")
const currency = document.querySelector(".currency")
const numberInput = document.querySelectorAll('.form-control')
const form = document.querySelector(".form")
const selectorBackgroundYears = document.querySelector('.years__background')
const selectorBackgroundTypes = document.querySelector('.type__background')
const selectorItemsYears = document.querySelectorAll('.years__select-item')
const selectorItemsTypes = document.querySelectorAll('.type__select-item')

document.querySelectorAll('.years__radio').forEach(item => {
    item.addEventListener('click', (event) => {
        if (item.value === '1') {
            selectorBackgroundYears.classList.remove("item--hidden")
            selectorBackgroundYears.classList.add("background-left")
            selectorBackgroundYears.classList.remove("background-center")
            selectorBackgroundYears.classList.remove("background-right")
            
        } else if (item.value === '2') {
            selectorBackgroundYears.classList.remove("item--hidden")
            selectorBackgroundYears.classList.remove("background-left")
            selectorBackgroundYears.classList.add("background-center")
            selectorBackgroundYears.classList.remove("background-right")
            
        } else if (item.value === '3') {
            selectorBackgroundYears.classList.remove("item--hidden")
            selectorBackgroundYears.classList.remove("background-left")
            selectorBackgroundYears.classList.remove("background-center")
            selectorBackgroundYears.classList.add("background-right")
        }
    })
})

document.querySelectorAll('.type__radio').forEach(item => {
    item.addEventListener('click', (event) => {
        if (item.value === '1') {
            selectorBackgroundTypes.classList.remove("item--hidden")
            selectorBackgroundTypes.classList.add("background-left")
            selectorBackgroundTypes.classList.remove("background-right")
            document.querySelector('.row__volume').classList.remove('item--hidden')
            document.querySelector('.row__power').classList.add('item--hidden')
        } else if (item.value === '2') {
            selectorBackgroundTypes.classList.remove("item--hidden")
            selectorBackgroundTypes.classList.remove("background-left")
            selectorBackgroundTypes.classList.add("background-right")
            document.querySelector('.row__volume').classList.add('item--hidden')
            document.querySelector('.row__power').classList.remove('item--hidden')
        }
    })
})

selectorItemsYears.forEach(items => {
    items.addEventListener('click', () => {
        selectorItemsYears.forEach(items => {
            items.classList.add("hover--grey")
        })
        items.classList.remove("hover--grey")
    })
})

selectorItemsTypes.forEach(items => {
    items.addEventListener('click', () => {
        selectorItemsTypes.forEach(items => {
            items.classList.add("hover--grey")
        })
        items.classList.remove("hover--grey")
    })
})

// // 
// 
// // 
// 
// 
// // 
// 
// 



// // 
// 
// // 
// 
// 
// // 
// 
// 

document.querySelectorAll('.years__radio').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelector('.type__select').classList.remove('item--disable')
    })
})


// // 
// 
// // 
// 
// 
// // 
// 
// 



// // 
// 
// // 
// 
// 
// // 
// 
// 

const currencyInput = document.querySelector('.currency__input')

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

currencyInput.addEventListener('input', () => {
    document.querySelector('.years__select').classList.remove('item--disable')
    let count = 0
    valueItem.forEach(item => {
            if (item.value === "1") {
                count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.55
                document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 
            } else if (item.value === "2") {
                count = parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537
            } else if (item.value === "3") {
                count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.0635
            }
    })
    document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 
    document.querySelector('.col__currency-block').classList.remove('item--hidden')
    if (currencyInput.value == '') {
        document.querySelector('.col__currency-block').classList.add('item--hidden')
    }
})

valueItem.forEach(item => {
    item.addEventListener("change", () => {
        if (item.value === "1" || item.value === "2") {
            currencyInput.placeholder = '¥'
        } else if (item.value === "3") {
            currencyInput.placeholder = "₩"
        }
    })
})

valueItem.forEach(item => {
    item.addEventListener("change", () => {
        let count = 0
        if (item.value === "1") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.55
            document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 
        } else if (item.value === "2") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537
        } else if (item.value === "3") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.0635
        }
        document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 

    })
})

// // 
// 
// // 
// 
// 
// // 
// 
// 



// // 
// 
// // 
// 
// 
// // 
// 
// 


const valueBtn = document.querySelector('.valute__select-btn')
const valueItems = document.querySelector('.valute__select-items')


valueBtn.addEventListener("click", () => {
    valueBtn.classList.toggle('valute__select-btn--active')
    valueItems.classList.toggle('item--hidden')
    valueItem.forEach(item => {
        item.addEventListener("change", () => {
            if (item.value === "1") {
                valueBtn.innerHTML = 'Иены'
            } else if (item.value === "2") {
                valueBtn.innerHTML = 'Юани'
            } else if (item.value === "3") {
                valueBtn.innerHTML = 'Воны'
            }
        })
    })
})

document.querySelectorAll('.valute__select-text').forEach(item => {
    item.addEventListener('click', () => {
        valueBtn.classList.toggle('valute__select-btn--active')
        valueItems.classList.toggle('item--hidden') 
    })
})


// // 
// 
// // 
// 
// 
// // 
// 
// 



// // 
// 
// // 
// 
// 
// // 
// 
// 

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("input", () => {
        console.log(item);
    })
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
        let resultCurrency = parseInt(values.currency) * 0.55
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

    if (values.flexRadioDefault === false) {
        if (values.type === '2') {
            fee.innerHTML = count * 0.15
        } else {
            if (values.year === "1") {
                if (count < 818210) {
                    let end = count * 0.54
                    if (end < values.volume * 2.5 * 95.7849) {
                        fee.innerHTML = values.volume * 2.5 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (count >= 818210 && count < 1607542) {
                    let end = count * 0.48
                    if (end < values.volume * 3.5 * 95.7849) {
                        fee.innerHTML = values.volume * 3.5 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (count >= 1607542 && count < 4071798) {
                    let end = count * 0.48
                    if (end < values.volume * 5.5 * 95.7849) {
                        fee.innerHTML = values.volume * 5.5 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (count >= 4071798 && count < 8133970) {
                    let end = count * 0.48
                    if (end < values.volume * 7.5 * 95.7849) {
                        fee.innerHTML = values.volume * 7.5 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (count >= 8133970 && count < 16267940) {
                    let end = count * 0.48
                    if (end < values.volume * 15 * 95.7849) {
                        fee.innerHTML = values.volume * 15 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (count >= 16267940) {
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
        }
        
    } else if (values.flexRadioDefault === true) {
        if (values.type === '1' || values.type === '5') {
            if (values.year === "1") {
                if (values.volume < 2801) {
                    fee.innerHTML = count * 0.15
                } else {
                    fee.innerHTML = count * 0.125
                }
            } else if (values.year === "2") {
                if (values.volume < 1000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.36 * 95.7849) {
                        fee.innerHTML = values.volume * 0.36 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1000 && values.volume < 1500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.4 * 95.7849) {
                        fee.innerHTML = values.volume * 0.4 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1500 && values.volume < 1800) {
                    let end = count * 0.2
                    if (end < values.volume * 0.36 * 95.7849) {
                        fee.innerHTML = values.volume * 0.36 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1800 && values.volume < 2300) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }else if (values.volume >= 2300 && values.volume < 2800) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 2800 && values.volume < 3000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }else if (values.volume >= 3000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.8 * 95.7849) {
                        fee.innerHTML = values.volume * 0.8 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }   
            } else if (values.year === "3") {
                if (values.volume < 1000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.36 * 95.7849) {
                        fee.innerHTML = values.volume * 0.36 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1000 && values.volume < 1500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.4 * 95.7849) {
                        fee.innerHTML = values.volume * 0.4 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1500 && values.volume < 1800) {
                    let end = count * 0.2
                    if (end < values.volume * 0.36 * 95.7849) {
                        fee.innerHTML = values.volume * 0.36 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1800 && values.volume < 2300) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }else if (values.volume >= 2300 && values.volume < 2800) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 2800 && values.volume < 3000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.44 * 95.7849) {
                        fee.innerHTML = values.volume * 0.44 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }else if (values.volume >= 3000) {
                    let end = count * 0.2
                    if (end < values.volume * 0.8 * 95.7849) {
                        fee.innerHTML = values.volume * 0.8 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }   
            }      
        } else if (values.type === '3' || values.type === '4') {
            if (values.year === "1") {
                if (values.volume < 1500) {
                    fee.innerHTML = count * 0.15
                } else if (values.volume >= 1500 && values.volume < 2500) {
                    fee.innerHTML = count * 0.15
                } else if (values.volume >= 2500) {
                    fee.innerHTML = count * 0.15
                }
            } else if (values.year === "2") {
                if (values.volume < 1500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.32 * 95.7849) {
                        fee.innerHTML = values.volume * 0.32 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1500 && values.volume < 2500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.4 * 95.7849) {
                        fee.innerHTML = values.volume * 0.4 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 2500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.8 * 95.7849) {
                        fee.innerHTML = values.volume * 0.8 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
            } else if (values.year === "3") {
                if (values.volume < 1500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.32 * 95.7849) {
                        fee.innerHTML = values.volume * 0.32 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 1500 && values.volume < 2500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.4 * 95.7849) {
                        fee.innerHTML = values.volume * 0.4 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                } else if (values.volume >= 2500) {
                    let end = count * 0.2
                    if (end < values.volume * 0.8 * 95.7849) {
                        fee.innerHTML = values.volume * 0.8 * 95.7849
                    } else {
                        fee.innerHTML = end
                    }
                }
            }     
        }
        } else if (values.type === '2') {
            fee.innerHTML = count * 0.15
        }  

    result.innerHTML = `ИТОГО: ${parseInt(fee.textContent) + parseInt(currencyBlock.textContent) + parseInt(recyclingCollectionBlock.textContent)}`
    console.log(fee.value);
}})



