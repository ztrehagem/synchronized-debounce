const synchronizedDebuonce = require('./')
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const initTime = Date.now()



const myTask = async () => {
  console.log(`${Date.now() - initTime}\t* start myTask`)
  await wait(1000)
  console.log(`${Date.now() - initTime}\tend myTask`)
}

const debounced = synchronizedDebuonce(myTask, 500)

const callsAfter = [
  0, //=> will start at 500
  600, //=> debounced
  700, //=> debounced
  800, //=> will start at 1500 instead of 1300 because myTask is synchronized
]

callsAfter.forEach((ms) => setTimeout(() => { console.log(`${Date.now() - initTime}\tcall`); debounced() }, ms))
