import React, { useState } from 'react'

function Timer() {
    const [timer, setTimer] = useState(10)

  
      if(timer == 0){
            return <h1>"Time's up!"</h1>
      }
      else{
            setTimeout(() => setTimer(timer - 1), 1000)
            return <h1>{timer}</h1>
      }
    
  
}

export default Timer
