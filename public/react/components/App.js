import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';
import { ViewStudentContainer } from './ViewStudentContainer';
import { LoginContainer } from './LoginContainer';
import { EnrollStudent } from './EnrollStudent';

export const App = () => {

	// const [user, setUser] = useState("")
	// const [student, setStudents] = useState(["Abdi", "Sharon", "Elizabeth", "James"])

	const [sauces, setSauces] = useState([])
	const campusList = useState(['All','Mars', 'Moon', 'Saturn'])


	// function handleClick(e) {
	// 	const updatedMessage = message + '🔥';
	// 	setMessage(updatedMessage)
	// }

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
		<div>
			{/* <LoginContainer /> */}
			<ViewStudentContainer items={sauces} campuses={campusList} />
			{/* <EnrollStudent /> */}
			
		</div>
	)
}