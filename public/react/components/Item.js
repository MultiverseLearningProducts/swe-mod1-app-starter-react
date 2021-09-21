import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";

export const Item = (props) => {
  const { onAdd } = props;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="card">
      <div className="hover-container">
        <div className="overlay">
          <a href="#" className="icon" >
            <ShoppingCartIcon></ShoppingCartIcon>
          </a>
        </div>
        <img
          id={`${isHovering ? "myImage" : ""}`}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="card-img"
          src={props.item.image}
        />
      </div>

      <h3 className="card-name">{props.item.name} </h3>
      <h3 className="card-price">$ {props.item.price}</h3>
      <button onClick={() => onAdd(props.item)}>Add To Cart</button>
      <a className="btn" href="#"><button className="btn btn-info btnback">
      <Link to={`plant/${props.item.id}`}>View Details</Link></button></a>
  
    </div>
  );
};
