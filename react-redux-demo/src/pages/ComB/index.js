import React from "react";

// 导入 connect
import { connect } from "react-redux";

class ComB extends React.Component {
  render() {
    console.log("ComB:", this.props);
    return <div>{this.props.count}</div>;
  }
}
/**
 * 接受 两个参数
 */
const mapStateToProps = state => {
  console.log("ComB:", state);
  return state;
};

// B组件属于是 接收方，那么需要实现 connect 方法的第一个参数
export default connect(mapStateToProps)(ComB);
