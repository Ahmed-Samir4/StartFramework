import React from 'react'
import Star from '../Star/Star'

export default function Home() {
    let name = 'start Framework'
    return (
        <>

            <div className="home d-flex justify-content-center align-items-center text-white ">
                <div className="text-center">
                    <img src="./images/avataaars.svg" alt className="mb-3" />
                    <Star name={name} />
                    <div>Graphic Artist - Web Designer - Illustrator</div>
                </div>
            </div>


        </>
    )
}
