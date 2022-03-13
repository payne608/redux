import React, { useContext, useReducer } from "react";
import context from "../../context/context.js"

//接收方
export default () => {
  
  const {state,dispatch}=useContext(context)

  return (
    <div>
      接收值为{state}
    </div>
  )
}