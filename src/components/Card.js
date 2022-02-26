import React from "react";
// import CardPhoto from "../images/katie-zaferes.png";
// import StarIcon from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`..images/${props.img}`} className="card--image" alt="profile" />
            <div className="card--stats">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
