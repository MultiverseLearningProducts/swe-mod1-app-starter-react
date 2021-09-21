import React, { useState, useEffect } from "react";

export const StudentTable = (props) => {

    const [students,setStudents] = useState([])
    const campuses = ["All", "Moon", "Mars", "Saturn"]
    const [filter, setFilter] = useState("All")
    const [allStudents, setAllStudents] = useState([])

    async function fetchStudents(){
		try {
			const response = await fetch('http://localhost:3000/sauces');
			const responseJSON = await response.json();
			setStudents(responseJSON);
            setAllStudents(responseJSON);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchStudents()
	}, []);

    function handleChange (e) {
        const newFilter = e.target.value
        console.log("New filter: ", newFilter)

        // update students based on filter
        if (newFilter == "All"){
            console.log("All students: ", allStudents)
            setStudents(allStudents)
            setFilter(newFilter)
            console.log("Filter: ", filter)
        } else {
            const filteredStudents = allStudents.filter(student => newFilter == student.campus)
            console.log("filtered students: ", filteredStudents)
            setStudents(filteredStudents)
            setFilter(newFilter)
        }
    }

    console.log("students in table: ", students)

    return (
        <>
        <div className="filter-student">
            <label htmlFor="campus-select">Filter Students by Location</label><br/>
            <select id="campus-select" onChange={handleChange}>
                {
                    campuses.map((campus, idx) => {
                        return <option key={idx} value={campus}>{campus}</option>
                    })
                }
            </select>
        </div>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   // row for each student
                        students.map((student, idx) => {
                            return (
                                <tr key={idx} value={student} className="student-row">
                                    <td>{student.studentId}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.campus}</td>
                                    <td><a className="table-link" href="">Unenroll</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )


}