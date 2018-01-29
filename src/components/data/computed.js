export const _initComputed = (vm) => {
  if (vm.$options.computed && vm.$options.computed instanceof Object) {
    for (let key in vm.$options.computed) {
      setterAndGetter(vm, key, vm.$options.computed[key])
    }
  }
}

function setterAndGetter (vm, key, func) {
  func = func.bind(vm)
  let value
  vm.dep = function () {
    value = func()
  }
  value = func()
  vm.dep = null
  Object.defineProperty(vm, key, {
    get: () => value
  })
}