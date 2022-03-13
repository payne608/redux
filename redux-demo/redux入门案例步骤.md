准备工作 
 1. 构建 react 项目
 2. 删除多余的文件
 3. 在 pages 目录下 创建 Home 组件
 4. 编写一个简单的 结构 样式  
 5. 在App.js 中引入这个组件
 6. 安装 redux
      npm i redux

构建 Action
 1. 在根目录下创建一个文件夹 action
 2. 在该目录下创建一个 index.js 文件，用来 构建 Action
 3. 在 action创建函数里面 利用return，返回一个action对象，注意需要携带type属性
 4. 把这个action创建函数进行导出

构建 Reducer
 1. 在根目录下创建一个文件夹 reducer
 2. 在该目录下创建一个 index.js 文件，用来 构建 reducer，注意reducer要接收两个参数
 3. 第一个参数是state，我们可以定义一个初始化的 state，然后进行赋值
 4. 在函数里面判断第二个参数 action的type值是否是我们发送的
 5. 如果是的话，我们可以通过 return 返回新的 state
 6. 把 reducer 进行导出

构建 Store
 1. 在根目录下创建一个文件夹 store
 2. 在该目录下创建一个 index.js 文件，用来 构建 store，注意 createStore 函数里面第一个参数接收的是 reducer
 3. 我们需要导入 刚刚创建的 reducer，然后设置到函数里面去
 4. createStore的返回值就是我们构建好的 store，然后进行导出

使用 
 1. 给页面的button按钮绑定一个点击事件
 2. 在组件一加载完毕的时候我们通过 store来进行 监听器的注册，返回值可以用来注销监听
 3. 在点击事件处理函数中，通过 store.dispatch 来发送一个 action










