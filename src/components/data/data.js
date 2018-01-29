export const _initData = (vm) => {
  if (vm.$options.data && vm.$options.data instanceof Object) {
    for (let key in vm.$options.data) {
      getterAndSetter(vm, key)
    }
  }
}

function getterAndSetter (vm, key) {
  let deps = []
  Object.defineProperty(vm, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      if (vm.dep) deps.push(vm.dep)
      return vm.$options.data[key]
    },
    set: (val) => {
      vm.$options.data[key] = val
      deps.forEach(func => func())
      vm.$updated
    }
  })
}