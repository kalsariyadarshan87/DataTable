import React, { useState } from 'react'

export default function 
() {
    const [list,setstate] = useState(["harsh","bhavish"])
  return (
    <div>
        {
            list.map((el,i)=>{
                return <li>{el}</li>
            })
        }
    </div>
  )
}
