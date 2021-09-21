import React, {useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom";
import { Item } from './Item';
import {Cart} from './Cart';
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


   
{/* <div classNameName="card">
        <img classNameName="card-img"src={singleItem.image}/>
        <div classNameName="row">
            <div classNameName="col-2">{singleItem.name}</div>
            <div classNameName="col-1 text-right">${singleItem.price}</div>
          </div>
        <h3 classNameName="card-name"> {singleItem.name} </h3>
        <h3 classNameName="card-price">$ {singleItem.price}</h3>
        <h3 classNameName="card-name">{singleItem.description} </h3>
        <Link to="/plants">Back </Link>
        <button onClick={() => onAdd(props.singleItem)} classNameName="add">
            Add to Cart</button>
    
</div> */}

return (
    <div className="grid-singleItem">
     <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"></div>
            <div className="col mb-4">

            <div className="card">
    
	
      <div className="card-body">
        <img src={singleItem.image} className="card-img-top singleItem-img"/><br/>
        <ul>
        <h2 className="card-title">{singleItem.name}</h2>
        <h3>Price: ${singleItem.price} USD</h3>
        <h3>Description: {singleItem.description}</h3>
       
        </ul><br/>
     
   
<a className="btn" href="#"><button className="btn btn-info btnback">
<Link to="/plants">Back </Link></button></a>

  
<a className="btn" href="#"><button className="btn btn-info btnback">
<Link to="/plants">Add to Cart </Link></button></a>

  </div>
</div>
</div>
</div>
</div>

 )
}
