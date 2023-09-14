import React, { useState } from 'react'
import Star from '../Star/Star';
import PortfolioChild from '../PortfolioChild/PortfolioChild';

export default function Portfolio() {
    let name = "PORTFOLIO COMPONENT";
    let color = "rgb(44, 62, 80)";

    const [Clicked, setClicked] = useState(false);
    const [image, setImage] = useState("");

    function showImg(img) {
        setImage(img);
        setClicked(true);

    }

    function hideImg(e) {
        if (e == undefined) {
            setImage("");
            setClicked(false);
        }
    }
    function display() {
        if (Clicked) {

            return (<div className="model bg-primary bg-opacity-25" onClick={(e) => hideImg(e.target.src)}>
                <img alt src={image} />
            </div>)

        }
    }
    return (
        <>
            <div className="mb-4 Portfolio">
                <div className="pt-4">
                    <Star color={color} name={name} />
                    <div className="container">
                        <div className="row g-5">
                            <PortfolioChild showImg={showImg} number={1} />
                            <PortfolioChild showImg={showImg} number={2} />
                            <PortfolioChild showImg={showImg} number={3} />
                            <PortfolioChild showImg={showImg} number={1} />
                            <PortfolioChild showImg={showImg} number={2} />
                            <PortfolioChild showImg={showImg} number={3} />
                        </div>
                    </div>
                </div>

                {display()}


            </div>
        </>
    )
}
