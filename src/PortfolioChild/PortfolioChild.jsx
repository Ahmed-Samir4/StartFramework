import React, { useState } from 'react'

export default function PortfolioChild(props) {
    let n = props.number;
    let show =props.showImg;
    
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div onClick={()=>show(`./images/port${n}.png`)} className="rounded-3 overflow-hidden position-relative">
                    <img alt className="w-100 rounded-3" src={`./images/port${n}.png`} />
                    <div className="portLayer">
                        <i className="text-white fa-solid fa-plus fa-6x" />
                    </div>
                </div>
            </div>
        </>
    )
}
