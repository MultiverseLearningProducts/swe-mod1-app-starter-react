import React, {useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom";
import { Item } from './Item';
import {Cart} from './Cart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          <img src={singleItem.image} alt={singleItem.name} className="item-img"/><br/>
        </div>
        <div className="plant-image">
          <img src={singleItem.image} alt={singleItem.name} className="item-img"/><br/>
        </div>
      </section>
      <section className="singleitem-right" aria-label="cart tab">
      <div className="single-item">
      <Rating name="size-medium" defaultValue={2} />
        <h2 className="card-title">{singleItem.name}</h2>
          <h3 className="card-title"> ${singleItem.price} USD</h3>
          <h3 >{singleItem.description}</h3> 
          <div className="button-group">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button component={Link} 
        // <If condition={props.item.type=='plants'}>
        // </If>
        to={'/plants'}>Back</Button>
        <Button className="cart-btn"
            aria-label="Add To Cart"
            onClick={() => onAdd(singleItem)}>Add to Cart</Button>
    
    </ButtonGroup>
    <h5>CATEGORIES:<span>Home,{singleItem.type}</span></h5>
      <h5>SHARE <span>    </span>
      <span>
      <FacebookIcon></FacebookIcon>
      <TwitterIcon></TwitterIcon>
      <InstagramIcon></InstagramIcon>
      </span>
      </h5>

      </div>
      </div>
      </section>
    </div>

 )
}
