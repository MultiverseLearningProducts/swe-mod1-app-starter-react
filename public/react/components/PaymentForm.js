import React, {useState} from 'react';

export default function PaymentForm() {

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: "",
        cardNumber: "",
        payment: ""

        });
        

    const [message,setMessage]=useState('');
    
    function handleChange(e) {
         // Use spread operator to clone previous state, but replace with new values
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

    }

	function handleSubmit(e){
        e.preventDefault() // prevents refresh in all browsers
        setMessage(`Payment Submitted ${input.fname } ,${ input.lname} ,#${input.cardNumber}`);

	}

	return(
		<div>
			{
				message ? message : (
					<form onSubmit={handleSubmit}>
						<div>
							<label for="fname">First Name: </label> 
                            <input type="text" id="fname" name="fname" value={input.fname} onChange={handleChange} placeholder="Enter first name" /> <br/>
						</div>

                        <div>
                            <label for="lname">Last Name: </label>
						    <input type="text" name="lname" value={input.lname} onChange={handleChange} placeholder="Enter last name" /> <br/>
                        </div>
                        <div>
                            <label for="email">Email: </label> 
						    <input type="text" name="email" value={input.email} onChange={handleChange} placeholder="Enter email" /> <br/>
                        </div>

                        <div>
                            <label for="password">Password: </label> 
							<input type="password" name="password" value={input.password} onChange={handleChange} placeholder="Enter password" /> <br/>
                        </div>

                        <div>
                            <label for="address">Shipping Address: </label> 
							<textarea id="address" rows="4" cols="20" name="address"  value={input.address} onChange={handleChange}> </textarea> <br/>
                        
                        </div>

                        <div>
                            <label for="cardNumber">Credit Card Number: </label> <br/>
							<input type="text" name="cardNumber" value={input.card} onChange={handleChange} /> <br/>

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
                        </div>
					</form>
				)
			}
			
		</div>
	)
}