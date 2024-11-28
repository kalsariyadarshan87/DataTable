import React, { useState } from 'react'
export default function Theme() {

    const [Theme, setTheme] = useState(false)

    function changeTheme() {
        setTheme((prevThme) => !prevThme)
    }

    return (
        <div style={{ background: "black", color: "white", height: "25vh", width: "100%" }}>
            <p style={{ color: Theme ? "white " : "black", background: Theme ? "black" : "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti tempore quia vero, assumenda consectetur nisi a officiis quaerat modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui fugiat dicta placeat blanditiis! Id repudiandae ut delectus beatae omnis dolores ex fuga sequi, ratione dolore quo veritatis earum itaque soluta quod sint repellendus, hic rem quia est atque. Provident!</p>
            <button onClick={changeTheme}>{Theme ? "switch to dark mode" : "switch to light mode"}Theme</button>
        </div>
    )
}
