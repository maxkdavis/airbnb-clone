import React from "react";

export default function NavBar() {
    return (
        <nav className="nav">
            <img src={process.env.PUBLIC_URL + "/images/airbnb-logo.png"} alt="airbnb logo" className="nav--logo" />
        </nav>
    );
}
