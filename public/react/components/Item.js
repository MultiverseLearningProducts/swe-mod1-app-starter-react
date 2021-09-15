import React from 'react';

export const Item = (props) =>{
    return (
        <div className="outter-card">
            <div class="centered">
                <section class="cards">
                    <article class="card">
                        <img className="item-img" src={props.item.image} />
                        <h3 className="title-img">{props.item.name} </h3> 
                    </article>
                </section>
            </div>
        </div>

    )
}































