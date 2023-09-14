import React from 'react'

export default function Star(props) {
    let name = props.name;
    let color1;
    if (props.color) {
        color1 = props.color;
    } else {
        color1 = "white";
    }

    return (
        <>

            <div className="text-center pt-4" style={{ color: `${color1}` }}>
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">{name}</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3" style={{ backgroundColor: `${color1}` }}></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line ms-3" style={{ backgroundColor: `${color1}` }}></div>
                </div>
            </div>
        </>
    )
}
