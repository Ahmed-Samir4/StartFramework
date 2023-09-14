import React, { useState } from 'react'
import Star from '../Star/Star';
import { getValue } from '@testing-library/user-event/dist/utils';

export default function Contact() {
    let name = "CONTACT SECTION";
    let color = "rgb(44, 62, 80)";

    let [Name, setName] = useState("")
    function nameTop(e) {
        if (e.target.value=='') {
            //add top-0
            setName("")
        } else {
            //remove top-0
            setName("top-0")
        }
    }
    let [Age, setAge] = useState("")
    function ageTop(e) {
        if (e.target.value=='') {
            //add top-0
            setAge("")
        } else {
            //remove top-0
            setAge("top-0")
        }
    }
    let [Email, setEmail] = useState("")
    function emailTop(e) {
        if (e.target.value=='') {
            //add top-0
            setEmail("")
        } else {
            //remove top-0
            setEmail("top-0")
        }
    }
    let [Pass, setPass] = useState("")
    function passTop(e) {
        if (e.target.value=='') {
            //add top-0
            setPass("")
        } else {
            //remove top-0
            setPass("top-0")
        }
    }
    return (
        <>
            <div className="mb-4 contact">
                <div className="pt-3 ">
                    <Star name={name} color={color} />
                    <form noValidate action className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid">
                        <label htmlFor="userName" className={`position-relative Top ${Name}`}>userName : </label>
                        <input onKeyUp={nameTop} id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="userAge" className={`position-relative Top ${Age}`}>userAge : </label>
                        <input onKeyUp={ageTop} id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="userEmail" className={`position-relative Top ${Email}`}>userEmail : </label>
                        <input onKeyUp={emailTop} id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="userPassword" className={`position-relative Top ${Pass}`}>userPassword : </label>
                        <input onKeyUp={passTop} id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}> send Message </button>
                    </form>
                </div>
            </div>

        </>
    )
}
