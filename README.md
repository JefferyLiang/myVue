# My Vue

> 看看vue的源代码，试着自己写一个vue出来。反正这种东西就很有意思。

## Build

```bash

  npm install

  npm run start

```

当我们使用 `npm run start` 时候，会运行`src/index.js`文件。

## 当前已经实现

### 单一模版的javascript的data数据域的变化更新计算属性`computed`

相关的代码在`src/components/data/computed.js`

同时需要配合`src/components/data/data.js`，通过巧妙利用data域的变量的getter来捕获计算属性的依赖变量。

### 模版方法`methods`

相关代码在`src/components/method/index.js`

### 一些简单的模拟数据更新钩子 如：`beforeCreate`,`created`,`beforeUpdate`,`updated`

* beforeCreate: 当构建实例模版前触发，在该钩子还没有把data域的数据注入到模版之中。
* created: 当构建完成后，触发该钩子。
* beforeUpdate: 当数据发生变化时触发该钩子，在钩子触发时，变化的数据还没发生改变。
* updated: 当数据发生变化后，触发的钩子。触发时，数据已经改变。

有空就看看vue.js的源代码一块块慢慢来吧。