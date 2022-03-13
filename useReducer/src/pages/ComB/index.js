import React, { useContext}from "react";

import { Fragment } from "react";
import context from "../../context/context";



export default  ComB = function () {
  
  const {state, dispatch}=useContext(context)
  function handleClick(params) {
    dispatch({
      type: "add_action",
      count:2
    })
  }
  return (
    <Fragment>
      <button onClick={{handleClick}}>
    点击增加{state}
      </button>

    </Fragment>
  )
} 
