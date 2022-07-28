let getEl = document.querySelector('#input')
const insert = (num) => (getEl.value = getEl.value + num)

const clean = () => getEl.value = ''

const equal=() => {
    let result = getEl.value
    if (result) {
        getEl.value = eval(result)
    }
}

const percent= () => {
    let result = getEl.value
    if (result) {
        getEl.value = eval(result)
    }
  getEl.value = result * 0.01
}
