import React, {useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom";
import { Item } from './Item';
import {Cart} from './Cart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function SingleItemContainer(props) {
    const [singleItem ,setSingleItem]=useState({ });
    let { id } = useParams();
    const { onAdd } = props;

    async function fetchSingleProduct(id) {
        try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const responseJSON = await response.json();
        console.log (responseJSON.product);
    
        setSingleItem(responseJSON.product);
    
        } catch (err) {
        console.log("Oh no an error! ", err);
        }
    }

    useEffect(() => {
        fetchSingleProduct(id);
    }, []);


return (
    
    <div className="single-item-container">
      <section className="singleitem-left" aria-label="shopping tabs">
      <div className="single-item">
          <img src={singleItem.image} alt={singleItem.name} className="singleItem-img"/><br/>
      </div>
      </section>
      <section className="singleitem-center" aria-label="home tab">
        <div className="plant-image">
          <img src={singleItem.image} alt={singleItem.name} className="card-img"/><br/>
        </div>
        <div className="plant-image">
          <img src={singleItem.image} alt={singleItem.name} className="card-img"/><br/>
        </div>
      </section>
      <section className="singleitem-right" aria-label="cart tab">
      <div className="single-item">
        <h2 className="card-title">{singleItem.name}</h2>
          <h3 className="card-title"> ${singleItem.price} USD</h3>
          <h3 >{singleItem.description}</h3> 
          <div className="button-group">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button component={Link} to={'/plants'}>Back</Button>
        <Button className="cart-btn"
            aria-label="Add To Cart"
            onClick={() => onAdd(singleItem)}>Add to Cart</Button>
    
    </ButtonGroup>
      
      </div>
      </div>
      </section>
    </div>

 )
}
