import React from 'react'
import  { use_content }  from "../hooks"

function browse() {
    const { series } =use_content("series")
    const { films } =use_content("films")
    console.log(series);
    console.log(films);
    return (
        <div>
            <p>Hello from brows page</p>
        </div>
    )
}

export default browse
