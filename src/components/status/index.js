import { Status } from './status'

export const _initStatus = (vm) => {
  if (vm.$options.beforeUpdate && vm.$options.beforeUpdate instanceof Function) {
    let beforeUpdate = new Status(vm, 'beforeUpdate', vm.$options.beforeUpdate.bind(vm))
    vm.$hook.beforeUpdate = beforeUpdate
  }
  if (vm.$options.updated && vm.$options.updated instanceof Function) {
    let updated = new Status(vm, 'updated', vm.$options.updated.bind(vm))
    vm.$hook.updated = updated
  }
}