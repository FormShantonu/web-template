import React from "react";


const Card = ({card_title = "Demo title", card_subtitle = "Demo subtitle", card_button = " Demo button"})=>(
    <div className="card" style={{width: "18rem"}}>
        <img
            src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
            <h5 className="card-title">{card_title}</h5>
            <p className="card-text">{card_subtitle}</p>
            <a href="#" className="btn btn-success">{card_button}</a>
        </div>
    </div>
);

export default Card;