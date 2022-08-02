import React from "react"
import logo from '../images/Airbnb-logo.jpg'
export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}