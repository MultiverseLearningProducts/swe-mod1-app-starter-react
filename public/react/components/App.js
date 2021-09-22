import React, { useState, useEffect } from 'react';
import {Route, Link 
} from 'react-router-dom'
import { ItemContainer } from './ItemContainer';
import { ViewStudentContainer } from './ViewStudentContainer';
import { LoginContainer } from './LoginContainer';
import { EnrollStudent } from './EnrollStudent';

export const App = () => {

	return (
		<div>
			<Route exact path="/">
			<LoginContainer />
			</Route>
			

			<Route path="/viewStudents">
			<ViewStudentContainer />
			</Route>
			<Route path="/enrollStudent">
			<EnrollStudent />
			</Route>
		</div>
	)
}