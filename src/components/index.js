import { _initData } from './data/data'
import { _initComputed } from './data/computed'
// import { _initStatus } from './status/index'
import { callHook, _initHook } from './hook'
import { _initMethods } from './method'

export class myComponent {

  constructor (options) {
    if (!(options instanceof Object)) throw('options is not Object')
    this.$options = {}
    this.$hook = {}
    this.dep = null
    if (options.data && options.data instanceof Object) this.$options.data = options.data
    if (options.computed && options.computed instanceof Object) this.$options.computed = options.computed
    
    _initHook(this, options)
    callHook(this, 'beforeCreate')
    _initData(this)
    _initComputed(this)
    _initMethods(this, options)
    callHook(this, 'created')
  }

}
