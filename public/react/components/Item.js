import React, { useState } from "react";

export const Item = (props) => {
  const { onAdd } = props;

  return (
    <div className="card">
      <img className="card-img" src={props.item.image} />
      <h3 className="card-name">{props.item.name} </h3>
      <h3 className="card-price">$ {props.item.price}</h3>
      <button onClick={() => onAdd(props.item)}>Add To Cart</button>
    </div>
  );
};
