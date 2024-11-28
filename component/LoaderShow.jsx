import React from 'react'
import Loader from './Loader'
import MainPage from './MainPage';

export default function LoaderShow() { 

    const MycompLoad = Loader(MainPage);

  return (
    <div> 
        <MycompLoad isLoading={true} data="hoc"/>
    </div>
  )
}