import React from "react"
import swim from  "../images/katie-zaferes.png"
import wed from '../images/wedding-photography.png'
import bike from '../images/mountain-bike.png'
import star from '../images/star.png'
import a from '../images/dog.png'
import b from '../images/prague.png'
import c from '../images/trip-korea.png'
import imag1 from '../images/tajj.jpg'
import e from '../images/sunny.png'
import f from '../images/turkey.png'
import dd from "../images/north.png"
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}