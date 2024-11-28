import React, { useState } from 'react'

export default function(){
    const [profile,setname] = useState ({
        name: "nayan",
        age : 20,
        Email :"nayan123@gmail.com"

    });
  return (
    <div>
        <h1>Name : {profile.name}</h1>
        <h1>age : {profile.age}</h1>
        <h1>Email : {profile.Email}</h1>
    </div>
  );
}
