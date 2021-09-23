import React, { useState } from "react";
import { Item } from "./Item";
import banner from "./assets/banner.jpg";

export const ItemContainer = (props) => {
  const { onAdd } = props; // props.onAdd

  return (
    <div className="item-container">
      <div class="banner-img">
        <div class="banner-text">
          <h1>Products</h1>
        </div>
      </div>
      {props.items.map((item, idx) => {
        return <Item onAdd={onAdd} item={item} key={idx} />;
      })}
    </div>
  );
};
