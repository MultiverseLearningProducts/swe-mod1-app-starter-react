import React, { useState, useEffect } from "react";

export const StudentTable = (props) => {

    // sets initial value all students, not working
    const [students,setStudents] = useState(props.students)
    const campuses = ["All", "Moon", "Mars", "Saturn"]
    const [filter, setFilter] = useState("All")

    function handleChange (e) {
        const newFilter = e.target.value
        setFilter(newFilter)
        
        // update students based on filter
        if (filter == "All"){
            setStudents(props.students)
        } else {
            setStudents(props.students.filter(student => filter == student.campus))
        }
    }

    return (
        <>
        <div>
            <label htmlFor="campus-select">Filter Students by Location</label>
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
                    {   // row for each student, not working renders students based on previous filter
                        students.map((student, idx) => {
                            return (
                                <tr key={idx} value={student}>
                                    <td>{student.studentId}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.campus}</td>
                                    <td><a href="">Unenroll</a></td>
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