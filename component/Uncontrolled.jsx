import React, { useState } from 'react'

export default function () {
 
    const nameref=useRef(null)
    const emailref=useRef(null)
    
   function submitform(e){
       e.preventDefault()
       console.log({
        name:nameref.current.value,
        name:emailref.current.value,
        
       });
   }

  return (
    <div>
        <h1>Uncontrolled Component</h1>

        <form onSubmit={submitform}>

            <input type="text" placeholder="name" ref={nameref}/> 
            <input type="text" placeholder="email" ref={emailref}/>
            <input type="submit"/>
        </form>
    </div>
  )
}
