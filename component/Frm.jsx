import React, { useState } from 'react'

export default function () {

   const [values,setval] = useState({
     name:"",
     email:"",
   })

   function submitform(e){
       e.preventDefault()
       console.log(values);
   }

  return (
    <div>
        <h1>Controlled Comp</h1>
        <form onSubmit={submitform}>
            <input type="text" placeholder='enter the name'  onChange={((e)=>setval({
                ...values,
                name:e.target.value
            }))}/>
            <input type="text" placeholder='enter the email'  onChange={((e)=>setval({
                ...values,
                email:e.target.value
            }))}/>
            <input type="submit"/>
        </form>
    </div>
  )
}
