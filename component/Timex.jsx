import React, { useRef,useState} from 'react'

export default function Timex() {
    const [timer,setTimer]=useState(0)    
    const id=useRef(null)   
    console.log(id);

    function start(){
        id.current= setInterval(()=>{
            setTimer((prev)=>prev+1)
        },100)
        console.log(id.current);
    }
    function stop(){
        clearInterval(id.current) 
    }
    function Reset(){
        
    }
  return (
    <div>
        <h1>Timer{timer}</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}
