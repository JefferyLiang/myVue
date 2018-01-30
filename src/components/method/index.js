export const _initMethods = (vm, options) => {
  vm.$methods = {}
  if (options.methods && options.methods instanceof Object) {
    for (let key in options.methods) {
      if (!(options.methods[key] instanceof Function)) return
      vm.$methods[key] = options.methods[key].bind(vm)
      Object.defineProperty(vm, key, {
        get: () => vm.$methods[key]
      })
    }
  }
}