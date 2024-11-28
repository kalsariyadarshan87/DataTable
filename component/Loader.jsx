import React from 'react'

export default function Loader(Component) {
  return function({isLoading, ...props}){ 
    if(isLoading){
        return <div>loading...</div>
    }else{
        return <Component {...props}/>
    }
  }
}