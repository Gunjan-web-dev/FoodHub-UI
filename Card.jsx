import React from "react";

function Card(props){
    return (
        <div className="card">
            <h3 id="dishname">Dish : {props.Dish}</h3>
            <p id="others">Items : {props.Items[0]}</p>
            <p id="others">Price : {props.Price}</p>
            <img id="img"src={props.photo} alt="img"/>
        </div>
    );
}

export default Card;