import React ,{useReducer}from 'react'
import HeaderComp from './HeaderComp'

const initialState ={
  counter: 10
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + 1,
      };

    case "DECREASE":
      return {
        counter: state.counter - 1,
      };

    case "ADD_VALUE":
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
};
function StateManage() {
  const [state, dispatch]= useReducer(AppReducer,initialState)
  const [counter , setCounter]= React.useState(0)
  const [Input , setInput]= React.useState(0)


  const add = ()=>{
    setCounter(counter+1)
  }

  const sub = ()=>{
    setCounter(counter-1)
  }

  return (
    <div>
      <HeaderComp/>
     <center>
     <h1>State Management</h1>
      <input
      value={Input}
      onChange={(e)=>{
        setInput(e.target.value)
      }}
      />
      <button 
     onClick={() => {
      dispatch({
        type: "ADD_VALUE",
        payload: Input,
      });
    }}
      >Enter</button>
      <br/>
      <h1>{state.counter}</h1>
      <button style={{
        height:"40px",
        width:"50px",
        backgroundColor:"red",
        border:"none",
        fontSize:"10px"
      }}
      onClick={() =>
        dispatch({
          type: "INCREASE",
        })
      }
      >+</button>
      <button style={{
        height:"40px",
        width:"50px",
        backgroundColor:"blue",
        border:"none",
        fontSize:"10px"

      }}
      onClick={() =>
        dispatch({
          type: "DECREASE",
        })
      }
      >-</button>

     </center>
    </div>
  )
}

export default StateManage
