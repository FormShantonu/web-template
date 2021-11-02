import React from "react";
import Card from "./Card";

const Cardsection = ()=>(
    <section className="contact bg-success ">
        <div className="container ">
            <h2 className="text-white">
            We love new friends!
            </h2>
            <div className="row">
                <div className="col-4">
                    <Card card_title = "Card test1" card_subtitle = "Card Subtitle 1" card_button = "button1"/>
                </div>
                <div className="col-4">
                    <Card card_title = "Card test2" card_subtitle = "Card Subtitle 1" card_button = "button2"/>
                </div>
                <div className="col-4">
                    <Card card_title = "Card test3" card_subtitle = "Card Subtitle 1" card_button = "button2"/>
                </div>
            </div>
        </div>
    </section>
);


export default Cardsection;