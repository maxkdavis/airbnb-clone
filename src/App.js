import React from "react";
// import Hero from "./components/Hero";
// import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

export default function App() {
    // <Hero />
    return (
        <div>
            <NavBar />
            <Card img="katie-zaferes.png" rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} />
        </div>
    );
}
