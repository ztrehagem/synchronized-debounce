import * as debounce from 'debounce'

export = (f: Function, interval?: number) => {
  let isReserved = false
  let isRunning = false

  const wrapper = async () => {
    if (isRunning) {
      isReserved = true
      return
    }

    isRunning = true
    await f()
    isRunning = false

    if (isReserved) {
      isReserved = false
      wrapper()
    }
  }

  return debounce(wrapper, interval)
}
