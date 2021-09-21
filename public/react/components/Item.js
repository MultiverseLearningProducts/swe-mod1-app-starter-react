import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Link } from "react-router-dom";

export const Item = (props) => {
  const { onAdd } = props;

  return (
    <div className="card">
      <div className="hover-container">
        <img
          className="card-img"
          alt={props.item.name}
          src={props.item.image}
        />
        <div className="overlay">
          <button
            className="cart-btn"
            aria-label="Favorite"
            onClick={() => onAdd(props.item)}
          >
            <FavoriteBorderIcon className="cart-icon"></FavoriteBorderIcon>
          </button>
          <Link
            to={`plant/${props.item.id}`}
            aria-label="View More Details"
            className="cart-btn"
          >
            <SearchIcon className="cart-icon"></SearchIcon>
          </Link>
          <button
            className="cart-btn"
            aria-label="Add To Cart"
            onClick={() => onAdd(props.item)}
          >
            <ShoppingCartOutlinedIcon className="cart-icon"></ShoppingCartOutlinedIcon>
          </button>
        </div>
      </div>

      <h3 className="card-name">{props.item.name} </h3>
      <h3 className="card-price">$ {props.item.price}</h3>
  

    </div>
  );
};
