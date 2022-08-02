const getMathDisplay = document.querySelector('#input')
const insert = (num) => (getMathDisplay.value = getMathDisplay.value + num)

const clean = () => (getMathDisplay.value = '')

const equal = () => {
  let result = getMathDisplay.value
  getMathDisplay.value = stringMath(result).toFixed(2)
}

const percent = () => {
  let result = getMathDisplay.value
  getMathDisplay.value = stringMath(result).toFixed(2)
  getMathDisplay.value = result * 0.01
}
