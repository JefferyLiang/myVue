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
      if (!vm.$hook.update) {
        vm.$hook.update = true
        callHook(vm, 'beforeUpdate')
        // 异步化,等待beforeUpdate的事件完成，再触发updated钩子
        setTimeout(function () {
          callHook(vm, 'updated')
          vm.$hook.update = false
        }, 0)
      }
      vm.$options.data[key] = val
      deps.forEach(func => func())
    }
  })
}
