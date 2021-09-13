import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';

export const App = () => {

	const [sauces, setSauces] = useState([])
	const [message, setMessage] = useState('🔥')


	function handleClick(e) {
		const updatedMessage = message + '🔥';
		setMessage(updatedMessage)
	}

	async function fetchSauces(){
		try {
			const response = await fetch('http://localhost:3000/sauces');
			const responseJSON = await response.json();
			setSauces(responseJSON)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces()
	}, []);

	return (
		<div onClick={handleClick}>	
			<h2 id="header-small">A Somewhat { message } Site</h2>
			<ItemContainer items={sauces} />
		</div>
	)
}