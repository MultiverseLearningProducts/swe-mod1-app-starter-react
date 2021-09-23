import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function PaymentForm() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    cardNumber: "",
    payment: "",
    
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents refresh in all browsers
    setMessage(
      `Payment Submitted ${input.fname} ,${input.lname} ,#${input.cardNumber}`
    );
  }

  return (
    <div>
       {message ? ( message) : (
          /*
        <form onSubmit={handleSubmit}>
        <h3>Payment Details Form</h3>
          <div className="paymentContainer">
          <div className="payment-center">
          <div>
            <label for="fname">First Name: </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={input.fname}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label for="lname">Last Name: </label>
            <input
              type="text"
              name="lname"
              value={input.lname}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label for="email">Email: </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div>
            <label for="password">Password: </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

            <div>
              <label for="address">Shipping Address: </label> 
              <textarea
               id="address" 
             rows="4" cols="20" 
             name="address"  
             value={input.address} 
             onChange={handleChange}
             placeholder="Enter address">
              </textarea>
               <br/>
                        
         </div>

            <div>
                <label for="cardNumber">Credit Card Number: </label> <br/>
                <input type="text"
                 name="cardNumber" 
                value={input.card} 
                onChange={handleChange}
                placeholder="Enter card number" /> <br/>
              </div>

			<div>
				<label for="payment">Payment Type: </label>
                <select id="payment" name="payment" onChange={handleChange}>
				<option></option>
				<option value="visa" >Visa</option>
				<option value="amex">Amex</option>
				<option vlaue="chase">Chase</option>
				</select>
			</div>

            <div>
			    <button type="submit" className="btn">Submit Order</button>
                <Button id="back-btn" component={Link} 
               to={'/cart'}>Back </Button>
            </div>
            </div>
            </div>
        </form> */
    // }

    //      )}
    //      </div>
       
    //      )
    //  }


     <h2>Payment Checkout Form</h2>
<p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
<div class="row">
  <div class="col-75">
    <div class="container">
      <form>
      
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter name"  value={input.fname}
              onChange={handleChange}>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="Enter email" value={input.email}
              onChange={handleChange}>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Enter address"  value={input.address}
              onChange={handleChange}>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City"  value={input.city}
              onChange={handleChange}>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"  value={input.state}
              onChange={handleChange}>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"  value={input.zip}
              onChange={handleChange}>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname">
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber"  value={input.cardNumber}
              onChange={handleChange}>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"  value={input.expmonth}
              onChange={handleChange}>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"  value={input.expyear}
              onChange={handleChange}>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"  value={input.cvv}
              onChange={handleChange}>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn">
      </form>
    </div>
  </div>



)}
</div>

)
}
