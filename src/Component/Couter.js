import React,{useState,useEffect} from 'react'
import CountDown from './CountDown'
import HeaderComp from './HeaderComp'

function Couter() {
  

  return (
    <div>
      <HeaderComp/>
    <center>
        <h1>CountDown</h1>
   <CountDown task="Read your book" name="osazie"/>
   <CountDown task="Go fetch water"  name="Ola"/>

    
    </center>
    </div>
  )
}

export default Couter
