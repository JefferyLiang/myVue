export class Status {

  constructor (vm, status) {
    this.status = status
    this.action = false
    this.triggerCallback = []
    Object.defineProperty(vm, `$${status}`, {
      get: () => {
        if (this.action) return false
        this.action = true
        for (let cb of this.triggerCallback) cb()
        this.action = false
        return true
      }
    })
  }

  addToCallBack (cb) {
    this.triggerCallback.push(cb)
  }
}