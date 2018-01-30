import { callHook } from '../hook'

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
      if (vm.$hook.update) {
        vm.$options.data[key] = val
        deps.forEach(func => func())
        return
      } else {
        vm.$hook.update = true
        callHook(vm, 'beforeUpdate')
        vm.$options.data[key] = val
        deps.forEach(func => func())
        callHook(vm, 'updated')
        vm.$hook.update = false
      }
    }
  })
}