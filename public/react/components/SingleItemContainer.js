import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";

export default function SingleItemContainer() {
    const [singleItem ,setSingleItem]=useState({ });
    let { id } = useParams();

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
        <div>
        <p> {singleItem.name}</p>
        <p>{singleItem.image}</p>

        </div>
    )
}
