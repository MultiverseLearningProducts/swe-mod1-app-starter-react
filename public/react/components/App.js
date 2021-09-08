import React, { useState } from 'react';


export const App = () => {
	
	const [message, setMessage] = useState('!')

	function handleClick(e) {
		const updatedMessage = message + '!';
		setMessage(updatedMessage)
	}

	return (
		<h4 id="header-small" onClick={handleClick}>
			Here's some React Code!{message}
		</h4>
	)
}