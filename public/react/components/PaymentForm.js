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
                            <input type="text" id="fname" name="fname" value={input.fname} onChange={handleChange} />
						</div>

                        <div>
                        <label for="lname">Last Name: </label>
							<input type="text" name="lname" value={input.lname} onChange={handleChange} />
                        </div>
                        <div>
                        <label for="email">Email: </label>
							<input type="text" name="email" value={input.email} onChange={handleChange} />
                        </div>

                        <div>
                        <label for="password">Password: </label>
							<input type="password" name="password" value={input.password} onChange={handleChange} />
                        </div>

                        <div>
                        <label for="address">Shipping Address: </label>
							<input type="text" name="address" value={input.address} onChange={handleChange} />
                        </div>

                        <div>
                        <label for="cardNumber">Credit Card Number: </label>
							<input type="text" name="cardNumber" value={input.card} onChange={handleChange} />

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
						<button type="submit" className="btn">Submit Order</button>
					</form>
				)
			}
			
		</div>
	)
}