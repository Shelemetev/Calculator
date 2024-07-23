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
            document.querySelectorAll('.volume__input').forEach(item => {
                if (item.value.replaceAll(" ", "") < 0) {
                    item.value = Math.abs(parseInt(item.value.replaceAll(" ", "")))
                }
            })
            
        } else if (item.value === '3') {
            selectorBackgroundYears.classList.remove("item--hidden")
            selectorBackgroundYears.classList.remove("background-left")
            selectorBackgroundYears.classList.remove("background-center")
            selectorBackgroundYears.classList.add("background-right")
            document.querySelectorAll('.volume__input').forEach(item => {
                if (item.value.replaceAll(" ", "") < 0) {
                    item.value = Math.abs(parseInt(item.value.replaceAll(" ", "")))
                }
            })
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
            document.querySelector('.power--input').value = ""
            document.querySelector('.row__power').classList.add('item--hidden')
            document.querySelector('.power__btn').classList.add('item--hidden')
        } else if (item.value === '2') {
            selectorBackgroundTypes.classList.remove("item--hidden")
            selectorBackgroundTypes.classList.remove("background-left")
            selectorBackgroundTypes.classList.add("background-right")
            document.querySelector('.volume--input').value = ""
            document.querySelector('.row__volume').classList.add('item--hidden')
            document.querySelector('.row__power').classList.remove('item--hidden')
            document.querySelector('.volume__btn').classList.add('item--hidden')
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


let globalCount 

currencyInput.addEventListener('input', () => {
    document.querySelector('.years__select').classList.remove('item--disable')
    let count = 0
    const valute = document.querySelector('input[name="export"]:checked').value
    if (valute === "1") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.55
        } else if (valute === "2") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537
        } else if (valute=== "3") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.0635
    }
    if (currencyInput.value < 0) {
        if (valute === "1") {
            count = Math.abs(parseInt(currencyInput.value.replaceAll(" ", "")) * 0.55)
        } else if (valute === "2") {
            count = Math.abs(parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537)
        } else if (valute=== "3") {
            count = Math.abs(parseInt(currencyInput.value.replaceAll(" ", "")) * 0.0635)
        }
        currencyInput.value = Math.abs(parseInt(currencyInput.value.replaceAll(" ", "")))
    }
    document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 
    document.querySelector('.col__currency-block').classList.remove('item--hidden')
    document.querySelector('.currency__btn').classList.remove('item--hidden')
    if (currencyInput.value == '') {
        document.querySelector('.col__currency-block').classList.add('item--hidden')
        document.querySelector('.currency__btn').classList.add('item--hidden')
    }
    
    globalCount = Math.round(count)
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
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.5642   
        
        } else if (item.value === "2") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537
            
        } else if (item.value === "3") {
            count = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.063609
            
        }
        document.querySelector('.auto__count-rub').innerHTML = numberWithSpaces(Math.round(count)) 
        document.querySelector('.currency-block').innerHTML = numberWithSpaces(Math.round(count)) 
        globalCount = Math.round(count)

        // document.querySelector('.auto__count-euro').innerHTML = numberWithSpaces(Math.round(count/ 96.1)) 
    })
})

document.querySelectorAll('.volume__input').forEach(item => {
    item.addEventListener('input', () => {
        if (item.value < 0) {
            item.value = Math.abs(parseInt(item.value))
        }
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
                valueBtn.item = 'Воны'
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

const radio = type => ['radio'].includes(type);
const fee = document.querySelector('.fee')


document.querySelectorAll("input").forEach(item => {
    item.addEventListener("input", () => {
        const radios = document.querySelectorAll('input[type="radio"]:checked')
        const fields = document.querySelectorAll('input, select')
        let localCount = 0
        const values = {}


        fields.forEach(field => {
            const {name,value} = field

            values[name] = value
        })

        radios.forEach(radios => {
            const {name,value} = radios

            values[name] = value
        })

        console.log(values);
        
        if (values.export === "1") {
            localCount = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.5642   
        
        } else if (values.export === "2") {
            localCount = parseInt(currencyInput.value.replaceAll(" ", "")) * 12.0537
            
        } else if (values.export === "3") {
            localCount = parseInt(currencyInput.value.replaceAll(" ", "")) * 0.063609
        }

        if (  values.currency != '' && values.export != '' && values.type != '0' && values.year != '0' && (values.power != "" || values.volume.replaceAll(" ", "") != "")) {
            document.querySelector('.result').classList.remove('item--hidden')
            document.querySelector('.auto__count-valute').innerHTML = numberWithSpaces(values.currency.replaceAll(" ", "")) 
            if (values.export == '1' || values.export == '2') {
                document.querySelector('.auto__count-valute--char').innerHTML = '¥'
            } else {
                document.querySelector('.auto__count-valute--char').innerHTML = '₩'
            }
            document.querySelector('.auto__count-rub').innerHTML = numberWithSpaces(globalCount) 

            if (values.type === "2") {
                    if (values.year === '1') {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 0.17))
                        } else {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 0.26))
                    }
            } else {
                if (values.year === '1') {
                    if (values.volume.replaceAll(" ", "").replaceAll(" ", "") < 3000) {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 0.17))
                    } else if (values.volume.replaceAll(" ", "").replaceAll(" ", "") >= 3000 && values.volume.replaceAll(" ", "").replaceAll(" ", "") <= 3500) {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 48.5))
                    } else if (values.volume.replaceAll(" ", "").replaceAll(" ", "") >= 3500) {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 61.76))
                    }
                } else {
                    if (values.volume.replaceAll(" ", "").replaceAll(" ", "") < 3000) {
                        
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 0.26))
                    } else if (values.volume.replaceAll(" ", "").replaceAll(" ", "") >= 3000 && values.volume.replaceAll(" ", "").replaceAll(" ", "") <= 3500) {
                        
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 74.25))
                    } else if (values.volume.replaceAll(" ", "").replaceAll(" ", "") >= 3500) {
                        document.querySelector('.recycling__сollection-block').innerHTML = numberWithSpaces(Math.round(20000 * 81.19))
                    }
                }
            }
            
            

            if (values.type === '2') {
                fee.innerHTML = numberWithSpaces(Math.round(localCount * 0.15)) 
            } else {
                if (values.year === "1") {
                    if (localCount < 818210) {
                        let end = localCount * 0.54
                        if (end < values.volume.replaceAll(" ", "") * 2.5 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 2.5 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                        
                    } else if (localCount >= 818210 && localCount < 1607542) {
                        let end = localCount * 0.48
                        if (end < values.volume.replaceAll(" ", "") * 3.5 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.5 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                    } else if (localCount >= 1607542 && localCount < 4071798) {
                        let end = localCount * 0.48
                        if (end < values.volume.replaceAll(" ", "") * 5.5 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5.5 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                    } else if (localCount >= 4071798 && localCount < 8133970) {
                        let end = localCount * 0.48
                        if (end < values.volume.replaceAll(" ", "") * 7.5 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 7.5 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                    } else if (localCount >= 8133970 && localCount < 16267940) {
                        let end = localCount * 0.48
                        if (end < values.volume.replaceAll(" ", "") * 15 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 15 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                    } else if (localCount >= 16267940) {
                        let end = localCount * 0.48
                        if (end < values.volume.replaceAll(" ", "") * 20 * 96.10) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 20 * 96.10))
                        } else {
                            fee.innerHTML = numberWithSpaces(Math.round(end))
                        }
                    }         
                } else if (values.year === "2") {
                    if (values.volume.replaceAll(" ", "").replaceAll(" ", "") < 1000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "").replaceAll(" ", "") * 1.5 * 96.10))
                    } else if (values.volume.replaceAll(" ", "").replaceAll(" ", "") >= 1000 && values.volume.replaceAll(" ", "").replaceAll(" ", "") < 1500) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "").replaceAll(" ", "") * 1.7 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 1500 && values.volume.replaceAll(" ", "") < 1800) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "").replaceAll(" ", "") * 2.5 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 1800 && values.volume.replaceAll(" ", "") < 2300) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 2.7 * 95))
                    }else if (values.volume.replaceAll(" ", "") >= 2300 && values.volume.replaceAll(" ", "") < 3000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 3000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.6 * 96.10))
                    }        
                } else if (values.year === "3") {
                    if (values.volume.replaceAll(" ", "") < 1000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 1000 && values.volume.replaceAll(" ", "") < 1500) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.2 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 1500 && values.volume.replaceAll(" ", "") < 1800) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.5 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 1800 && values.volume.replaceAll(" ", "") < 2300) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 4.8 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 2300 && values.volume.replaceAll(" ", "") < 3000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5 * 96.10))
                    } else if (values.volume.replaceAll(" ", "") >= 3000) {
                        fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5.7 * 96.10))
                    }        
                } 
            }

            document.querySelectorAll('.years__radio').forEach(item => {
                item.addEventListener('change', () => {
                    if (item.value === "1") {
                        if (localCount < 818210) {
                            let end = localCount * 0.54
                            if (end < values.volume.replaceAll(" ", "") * 2.5 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 2.5 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                            
                        } else if (localCount >= 818210 && localCount < 1607542) {
                            let end = localCount * 0.48
                            if (end < values.volume.replaceAll(" ", "") * 3.5 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.5 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                        } else if (localCount >= 1607542 && localCount < 4071798) {
                            let end = localCount * 0.48
                            if (end < values.volume.replaceAll(" ", "") * 5.5 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5.5 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                        } else if (localCount >= 4071798 && localCount < 8133970) {
                            let end = localCount * 0.48
                            if (end < values.volume.replaceAll(" ", "") * 7.5 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 7.5 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                        } else if (localCount >= 8133970 && localCount < 16267940) {
                            let end = localCount * 0.48
                            if (end < values.volume.replaceAll(" ", "") * 15 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 15 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                        } else if (localCount>= 16267940) {
                            let end = localCount * 0.48
                            if (end < values.volume.replaceAll(" ", "") * 20 * 96.10) {
                                fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 20 * 96.10))
                            } else {
                                fee.innerHTML = numberWithSpaces(Math.round(end))
                            }
                        }      
                         
                    } else if (item.value === "2") {
                        if (values.volume.replaceAll(" ", "") < 1000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 1.5 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1000 && values.volume.replaceAll(" ", "") < 1500) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 1.7 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1500 && values.volume.replaceAll(" ", "") < 1800) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 2.5 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1800 && values.volume.replaceAll(" ", "") < 2300) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 2.7 * 95))
                        }else if (values.volume.replaceAll(" ", "") >= 2300 && values.volume.replaceAll(" ", "") < 3000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 3000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.6 * 96.10))
                        }        
                    } else if (item.value === "3") {
                        if (values.volume.replaceAll(" ", "") < 1000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1000 && values.volume.replaceAll(" ", "") < 1500) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.2 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1500 && values.volume.replaceAll(" ", "") < 1800) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 3.5 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 1800 && values.volume.replaceAll(" ", "") < 2300) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 4.8 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 2300 && values.volume.replaceAll(" ", "") < 3000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5 * 96.10))
                        } else if (values.volume.replaceAll(" ", "") >= 3000) {
                            fee.innerHTML = numberWithSpaces(Math.round(values.volume.replaceAll(" ", "") * 5.7 * 96.10))
                        }        
                    } 
                })

            })
            
            document.querySelector('.result__count').innerHTML = numberWithSpaces(parseInt(fee.textContent.replaceAll(" ", '')) + Math.round(localCount) + parseInt(document.querySelector('.recycling__сollection-block').textContent))
            document.querySelector('.auto__count-euro').innerHTML = numberWithSpaces(Math.round(parseInt(fee.textContent.replaceAll(" ", '')) / 96) ) 
            document.querySelector('.intermediate--result').innerHTML = numberWithSpaces(parseInt(fee.textContent.replaceAll(" ", '')) + parseInt(document.querySelector('.recycling__сollection-block').textContent))
        } else {
            document.querySelector('.result').classList.add('item--hidden')

        }
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

document.querySelector('.currency__btn').addEventListener("click", () => {
    currencyInput.value = ""
    document.querySelector('.currency__btn').classList.add('item--hidden')
    document.querySelector('.col__currency-block').classList.add('item--hidden')  
    document.querySelector('.result').classList.add('item--hidden')  
})

document.querySelector('.volume__btn').addEventListener("click", () => {
    document.querySelector('.volume__input').value = ""
    document.querySelector('.volume__btn').classList.add('item--hidden')
    document.querySelector('.result').classList.add('item--hidden')
})

document.querySelector('.volume__input').addEventListener('input', () => {
    document.querySelector('.volume__btn').classList.remove('item--hidden')
    if (document.querySelector('.volume__input').value === "") {
        document.querySelector('.volume__btn').classList.add('item--hidden')
    }
    
})

document.querySelector('.power__btn').addEventListener("click", () => {
    document.querySelector('.power--input').value = ""
    document.querySelector('.power__btn').classList.add('item--hidden')
    document.querySelector('.result').classList.add('item--hidden')
})

document.querySelector('.power--input').addEventListener('input', () => {
    document.querySelector('.power__btn').classList.remove('item--hidden')
    if (document.querySelector('.power--input').value === "") {
        document.querySelector('.power__btn').classList.add('item--hidden')
    }
    
})
