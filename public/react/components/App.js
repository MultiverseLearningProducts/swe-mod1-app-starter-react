import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';

export const App = () => {

	const [plants, setPlants] = useState([])
	const [message, setMessage] = useState('🔥')


	function handleClick(e) {
		const updatedMessage = message + '🔥';
		setMessage(updatedMessage)
	}

	async function fetchPlants(){
		try {
			const response = await fetch('http://localhost:3000/plants');
			const responseJSON = await response.json();
			setPlants(responseJSON)
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPlants()
	}, []);

	return (
		<div onClick={handleClick}>	
			<h2 id="header-small">A Somewhat { message } Site</h2>
			<ItemContainer items={plants} />
		</div>
	)
}