import React from 'react';

export const Item = (props) =>{
    return (
    <div className="item-card">
        <div className="card-item">
        <img className="item-img" src={props.item.image} />
        </div>
        <div className="card-item">
        <h3 className="title-img">{props.item.name} </h3> 
        </div>
    </div>

    )
}































