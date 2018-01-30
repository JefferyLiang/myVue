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
    console.log('构建前: data域数据尚未注入')
  },
  created () {
    console.log('构建完成: data域数据注入完成')
    this.firstName = 'FaHang'
    this.lastName = 'Lin'
    console.log(this.fullName)
  },
  beforeUpdate () {
    console.log(`数据发生变化前: ${this.fullName}`)
  },
  updated () {
    console.log(`更新后数据： ${this.fullName}`)
  },
  methods: {
    setFirstName (str) {
      this.firstName = str
    },
    setLastName (str) {
      this.lastName = str
    }
  }
})