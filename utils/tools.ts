export function throttle(t: number, fn: Function) {
  let last
  let timer
  let interval = t || 500
  return function () {
    let args = arguments
    let now = + new Date()
    //等待执行
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
      }, interval)
    } else {
      fn.apply(this, args) //立即执行，则在wait毫秒内开始时执行
      last = now
    }
  }
}
