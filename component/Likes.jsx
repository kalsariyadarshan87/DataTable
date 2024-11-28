import React, { useState } from 'react'

export default function Likes() {

    const [like, islike] = useState(false);
    const [lcount, setlcount] = useState(0);
    const [dcount, setdcount] = useState(0);


    function gotlike() {
        islike((prevlike) => !prevlike);
        if (!like) {
            setlcount((prev) => prev + 1);
        } else {
            setdcount((prev) => prev + 1);
        }

    }

    return (
        <div>

            <span style={{ color: like ? "blue" : "white" }}>state : {like ? "liked" : "notliked"}</span>
            <br />
            <button onClick={gotlike}>{like ? "unlike" : "like"}</button>
            <br />
            <span>Likes Count : {lcount}</span>
            <br />
            <span>Dislikes Count : {dcount}</span>
        </div>
    )
}