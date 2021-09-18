import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';
import { ViewStudentContainer } from './ViewStudentContainer';
import { LoginContainer } from './LoginContainer';
import { EnrollStudent } from './EnrollStudent';

export const App = () => {

	// variable for seed data
	const [studentList, setStudents] = useState([])

	// function handleClick(e) {
	// 	const updatedMessage = message + '🔥';
	// 	setMessage(updatedMessage)
	// }

	async function fetchStudents(){
		try {
			const response = await fetch('http://localhost:3000/sauces');
			const responseJSON = await response.json();
			setStudents(responseJSON);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchStudents()
	}, []);

	return (
		<div>
			<LoginContainer />
			{/* <ViewStudentContainer students={studentList} /> */}
			{/* <EnrollStudent /> */}
		</div>
	)
}