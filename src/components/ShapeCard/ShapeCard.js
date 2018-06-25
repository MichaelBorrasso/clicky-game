import React from "react";
import "./ShapeCard.css";

const ShapeCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default ShapeCard;