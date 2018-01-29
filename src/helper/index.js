export const hook = (obj, method) => {
  let orig = obj[method]
  obj[method] = function () {
    orig.apply(this, arguments)
  }
}