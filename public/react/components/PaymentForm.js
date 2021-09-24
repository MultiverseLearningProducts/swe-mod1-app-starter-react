import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentForm() {
  const [input, setInput] = useState({
    fname: "",
    email: "",
    password: "",
    address: "",
    apartment:"",
    city:"",
    zipcode:"",
    ccv:"",
    cardNumber: "",
    payment: "",

    
  });
  const [nameError, setNameError] = useState(null)

  const [message, setMessage] = useState("");

  function handleChange(e) {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }


  function handleSubmit(e) {
    e.preventDefault(); 
    // prevents refresh in all browsers
    alert( `Enjoy your Purchase:) Payment Submitted ${input.fname} #${input.cardNumber}`)

    setMessage(
      `Payment Submitted ${input.fname} ,#${input.cardNumber}`
    );
  }

  return (
    <div className="form-container">
       {message ? ( message) : (
        
    
        <form id="form-id" onSubmit={handleSubmit}>
         <h1 id="heading">Payment Checkout Form</h1>
         <div className="paymentContainer">
          <div className="payment-center">


          <div>
            <label for="email">Contact Information: </label>
            <input className="box"
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Email or mobile phone number"required
            />
          </div> <br/>

          <div>
            <label for="password">Password: </label>
            <input className="box"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Password" required
            />
          </div> <br/>

            <div>
              <label for="address">Shipping Address: </label> 
              <input
               className="box"
              type="text"
              id="fname"
              name="fname"
              value={input.fname}
              onChange={handleChange}
              placeholder="Full name" required
            />
              <input
              className="box"
              type="text"
              id="address"
              name="address"
              value={input.address}
              onChange={handleChange}
              placeholder="Address,apartment,suite" required
            />
           

            <div className="address-details">
           
            <select id="city" name="city" placeholder="select city" onChange={handleChange}>
				<option>Select City</option>
				<option value="chicago" >Chicago</option>
				<option value="newyork">New York</option>
				<option vlaue="dallas">Dallas</option>
				</select>
                </div>

                <div className="address-details">
                <input
                className="box2"
              type="text"
              id="zipcode"
              name="zipcode"
              value={input.zipcode}
              onChange={handleChange}
              placeholder="Zipcode" required
            />
             </div>
             </div>         
         <br/>

            <div className="card-details">
                <label for="cardNumber">Credit Card Details: </label> 
                <input 
                className="box2"
                type="text"
                 name="cardNumber" 
                value={input.card} 
                onChange={handleChange}
                placeholder="Card number" required /> 
                </div>

                <div className="card-details">

                <input
                className="box2"
                 type="text"
                 name="ccv" 
                value={input.ccv} 
                onChange={handleChange}
                placeholder="CCV" required /> 
            </div> <br/>

			<div>
				<label for="payment">Payment Type: </label>
                <select id="payment" name="payment" placeholder="select payment" onChange={handleChange}>
				<option>Select Type</option>
				<option value="visa" >Visa</option>
				<option value="amex">Amex</option>
				<option vlaue="chase">Chase</option>
				</select>
			</div> <br/>


            <div>
			    <button type="submit" className="btn">Submit Order</button>
                <button className="return-cart-btn btn">
                <Link to="/cart">Return to Cart</Link></button>
                
            </div>
            
        </div>
        </div>
    
</form> 



        )}
    </div>

        )
    }



