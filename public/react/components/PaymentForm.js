import React, { useState } from "react";
import { validate } from "@babel/types";

export default function PaymentForm() {
  const [input, setInput] = useState({
    fname: "",
    email: "",
    password: "",
    address: "",
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
    alert( `Payment Submitted ${input.fname} #${input.cardNumber}`)

    setMessage(
      `Payment Submitted ${input.fname} ,#${input.cardNumber}`
    );
  }

  

  return (
    <div>
       {message ? ( message) : (
   
        <form onSubmit={handleSubmit}>
         <h1 id="heading">Payment Checkout Form</h1>
         <div className="paymentContainer">
          <div className="payment-center">

          <div>
            <label for="fname">Full Name: </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={input.fname}
              onChange={handleChange}
              placeholder="Enter name" required
            />
          </div> <br/>

          <div>
            <label for="email">Email: </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter email"required
            />
          </div> <br/>

          <div>
            <label for="password">Password: </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter password" required
            />
          </div> <br/>

            <div>
              <label for="address">Shipping Address: </label> 
              <textarea
               id="address" 
             rows="4" cols="20" 
             name="address"  
             value={input.address} 
             onChange={handleChange}
             placeholder="Enter address" required>
              </textarea>
             
                        
         </div> <br/>

            <div>
                <label for="cardNumber">Credit Card Number: </label> 
                <input type="text"
                 name="cardNumber" 
                value={input.card} 
                onChange={handleChange}
                placeholder="Enter card number" required /> 
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
                {/* <Button id="back-btn1" component={Link} 
               to={'/cart'}>Back </Button> */}
            </div>
            
        </div>
    </div>
</form> 


        )}
    </div>

        )
    }



