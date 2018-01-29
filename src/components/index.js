import { _initData } from './data/data'
import { _initComputed } from './data/computed'
import { _initStatus } from './status/index'

export class myComponent {

  constructor (options) {
    this.$options = {}
    this.$hook = {}
    this.dep = null
    if (options && options.data && options.data instanceof Object) this.$options.data = options.data
    if (options && options.computed && options.computed instanceof Object) this.$options.computed = options.computed
    if (options && options.beforeUpdate && options.beforeUpdate instanceof Function) this.$options.beforeUpdate = options.beforeUpdate
    if (options && options.updated && options.updated instanceof Function) this.$options.updated = options.updated

    _initData(this)
    _initComputed(this)
    _initStatus(this)
  }

}