import React from "react";

export const Item = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.item.image} />
      <h3 className="card-name">{props.item.name} </h3>
    </div>
  );
};
