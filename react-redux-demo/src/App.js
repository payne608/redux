import React from "react";
import "./App.css";

// 导入我们的 store
import store from "./store";

// 导入Provider组件，利用这个组件包裹我们的结构，从而能够达到统一维护 stroe 的效果
import { Provider } from "react-redux";

// 引入 组件 A
import ComA from "./pages/ComA";
// 引入 组件 B
import ComB from "./pages/ComB";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
