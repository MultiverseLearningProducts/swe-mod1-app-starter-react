import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';
import { ViewStudentContainer } from './ViewStudentContainer';
import { LoginContainer } from './LoginContainer';
import { EnrollStudent } from './EnrollStudent';

export const App = () => {

	return (
		<div>
			<LoginContainer />
			{/* <ViewStudentContainer /> */}
			{/* <EnrollStudent /> */}
		</div>
	)
}