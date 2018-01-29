export class Status {

  constructor (vm, status, cb) {
    this.status = status
    this.action = false
    this.triggerCallback = cb
    Object.defineProperty(vm, `$${status}`, {
      get: () => {
        if (this.action) return false
        this.action = true
        this.triggerCallback()
        this.action = false
        return true
      }
    })
  }
}