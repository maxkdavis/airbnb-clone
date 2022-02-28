import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Hero from "./components/Hero.js";
import Data from "./Data.js";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

export default function App() {
    const cards = Data.map((item) => {
        return <Card key={item.id} img={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} title={item.title} price={item.price} openSpots={isContentEditable.openSpots} />;
    });

    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    );
}
