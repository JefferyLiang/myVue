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
  beforeCreate () {
    console.log('before create')
  },
  created () {
    console.log('created')
  },
  beforeUpdate () {
    console.log('数据发生变化前')
    console.log(`原始数据： ${this.firstName}`)
    console.log('开始变化')
  },
  updated () {
    console.log(`更新后数据： ${this.fullName}`)
  },
  methods: {
    setFirstName (str) {
      this.firstName = str
      this.setLastName('fahang')
    },
    setLastName (str) {
      this.lastName = str
    }
  }
})

vm.setFirstName('Lin')