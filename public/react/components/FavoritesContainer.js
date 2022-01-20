import React from "react";
import { Item } from "./Item";

export const FavoritesContainer = (props) => {
  const { onAdd, onFav } = props; // props.onAdd

  return (
    <>
      <div className="banner-img">
        <div className="banner-text">
          <h1>Favorites</h1>
        </div>
      </div>
      <div className="item-container">
        <div>{props.favItems.length === 0 && <h3>No favorites yet!</h3>}</div>
        {props.favItems.map((item, idx) => {
          return <Item onAdd={onAdd} onFav={onFav} item={item} key={idx} />;
        })}
      </div>
    </>
  );
};
