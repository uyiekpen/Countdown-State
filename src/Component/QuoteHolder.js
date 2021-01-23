import React from 'react'
import HeaderComp from './HeaderComp'

const quote = [
     "Alone you can do so little, but together you can do much",
      "you are better"
 
 
]

function QuoteHolder() {
  const [Allquote, SetAllquote] = React.useState(0)
  return (

    <div>
      <HeaderComp/>
     <center>
     <h1>This is the QUOTE</h1>
     <h1>{quote.lenght}</h1>
    
       <h3 
         onClick={() => {
          SetAllquote(Allquote + 1)
        
        }}
       
       >{quote[ SetAllquote % quote.length]}</h3>
     
     </center>
    </div>
  )
}

export default QuoteHolder
