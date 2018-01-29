import { myComponent } from './components'

let vm = new myComponent({
  data: {
    firstName: 'Jeffery',
    lastName: 'Liang'
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  updated () {
    this.lastName = 'fahang'
  }
})

vm.firstName = 'Lin'