import React from 'react'
import Star from '../Star/Star'

export default function About() {
    let name = "ABOUT COMPONENT";
    return (
        <>
            <div class="about text-white d-flex justify-content-center align-items-center">
                <div>
                    <Star name={name} />
                    <div class="container">
                        <div class="row px-5">
                            <div class="col-md-6 ps-md-5">
                                <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                            </div>
                            <div class="col-md-6 pe-5">
                                <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
