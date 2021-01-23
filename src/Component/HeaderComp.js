import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComp() {
  return (
    <div>
     <div style={{
       display:"flex", justifyContent:"space-evenly",height:"70px",backgroundColor:"#123456",fontFamily:"poppins",
    color:"white"
    }}>
     
  <Link to="/Couter">   <h3>Counter</h3></Link>

   <Link to="/quote">  <h3>Quoteholder</h3></Link>
    <Link to="/state"> <h3>StateManagement</h3></Link>
     <div   style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100px"
      }}
      >
     <button 

style={{
  width:"100px",
  height:"50px"
}}
      >Donate</button>
     </div>
     </div>
    </div>
  )
}

export default HeaderComp
