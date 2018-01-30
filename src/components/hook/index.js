export const callHook = (vm, hook) => {
  const handlers = vm.$options[hook]
  if (handlers) {
    handlers.call(vm)
  }
  // console.log(handlers)
  // if (handlers) {
  //   for (let i = 0; i<handlers.length ; i++) {
  //     handlers[i].call(vm)
  //   }
  // }
}

export const _initHook = (vm, options) => {
  vm.$hook.update = false
  if (options.beforeCreate && options.beforeCreate instanceof Function) vm.$options.beforeCreate = options.beforeCreate
  if (options.created && options.created instanceof Function) vm.$options.created = options.created
  if (options.mounted && options.mounted instanceof Function) vm.$options.mounted = options.mounted
  if (options.beforeUpdate && options.beforeUpdate instanceof Function) vm.$options.beforeUpdate = options.beforeUpdate
  if (options.updated && options.updated instanceof Function) vm.$options.updated = options.updated
}