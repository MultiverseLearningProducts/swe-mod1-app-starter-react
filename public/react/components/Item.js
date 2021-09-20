import React, { useState } from "react";


export const Item = (props) => {
  const { onAdd } = props;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter=() => {
      setIsHovering(true);
  }

  const handleMouseLeave=() => {
    setIsHovering(false);
}
  
 


  return (
    <div className="card">
      
        <img id={`${isHovering? "myImage": ""}`} onMouseLeave={ handleMouseLeave } onMouseEnter={ handleMouseEnter } className="card-img" src={props.item.image} />
        <h3 className="card-name">{props.item.name} </h3>
        <h3 className="card-price">$ {props.item.price}</h3>
        <button onClick={() => onAdd(props.item)}>Add To Cart</button>
        <button onClick={() => onView(props.item)}>View Details</button>
      
    </div>
  );
};
