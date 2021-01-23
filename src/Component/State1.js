import React,{useState,useReducer} from 'react'

const initialState={
  count: 0,
}

const AppReducer=(state,action)=>{
  switch (action.type){
    case "INCREASE":
      return {
        count: state.count + 1,
      };
      case "DECREASE":
      return {
        count: state.count -1,
      };
      case "ADD_VALUE":
      return {
        count: action.payload
      };
    
    default:
      return state
  }
}

function State1() {
  const [state , dispatch]= useReducer(AppReducer,initialState)
  const [input, setInput]=useState(0)
  const [count, setCount]=useState(0)



  return (
    <div>
      <center>
        <h1>State Management3</h1>
        <input 
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
        />{" "}
        <button 
        onClick={()=>{
          dispatch({
            type:"ADD_VALUE",
            payload:parseInt(input),
          })
        }}
        >Enter</button>
        <br/>
        <h1>{state.count}</h1>
        <button onClick={()=>
          dispatch({
            type:"INCREASE",
          })
      
      }
        
        >+</button>
        <button onClick={()=>
        dispatch({
          type:"DECREASE"
        })
        }>-</button>

      </center>
    </div>
  )
}

export default State1
