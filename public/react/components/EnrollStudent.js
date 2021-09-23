import React, {useState} from "react";
import {Route, Link 
} from 'react-router-dom';

export const EnrollStudent = (props) => {
    
    const [student, setStudent] = useState({firstName : '', lastName : '', campus : ''});
    const [message, setMessage] = useState('')
    

    function handleFirst(e){
        const newStudent = student;
        newStudent.firstName = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleLast(e){
        const newStudent = student;
        newStudent.lastName = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleCampus(e){
        const newStudent = student;
        newStudent.campus = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleSubmit(e){
        e.preventDefault()
        setMessage(`Student ${student.firstName} ${student.lastName} enrolled at ${student.campus} Campus`)
    }

    return (
        <div className="container">
            <header className="header">
				<div className="header-info">
                    <img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABLS0u3t7fr6+v19fWUlJTg4OCGhob6+vo6OjpQUFA+Pj7d3d3Ly8vu7u5wcHBra2ugoKB/f3+NjY1XV1fR0dEODg41NTW5ubkgICBhYWGbm5uurq4bGxvExMQoKCh2dnYuLi4VFRVkZGTQk3svAAAES0lEQVR4nO2dUVfiMBCFRShQFRVFBQEB3f//G1eXTCVXe7rbzEyynvs95qHhi9PppKnJ2RkhhBBCCCGEEEIIIYQQQgghhBBCSNFUs+1m7M1mO7tx8nucvwzy8LTeOfhNLjPpHbl6tBa8y+r3wcJWcJHb751bS8FNbrs/3NsJXud2CwzNDHPl0C9URoL5s4xglW2ec4t9YiP4mFvrBJsnfzlBOhhMTQxvc2ud8GBi+JBb64RzE8O4IJ1PfTlEvV85GJpXwMDE3fDapI92ZjRUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtry8w39/w94OPFl526YFxr24zy31gmvtYHgpLtfRyw2PChpaxObPXhKug3fw1RfcJTbCZipG25zKwFjdcOr3ErAk7bgDXSwqCtf6nv4BdphikGqfxt0MYNfoB2m8Lg3SGWd7E1/AmbSO93L/xX4QNYNIwzSsBts7cOxMxxl3TCFfb7CZmKj5YULYTyh5lCtvjGTbo/Nq4EPYYc9DKSJoiFeO+w9+cvJcH7sroJmzTBdx5cOu8BWXltF7sOIzuNmxTDFwQtR47dVZJgr7aBZL0yH8YWfQ3KbuhmGjSBrCJqNmiFkUtnH99XNcBl6hMptryWIQRpixnPSH+IR7wutMIWHglT1npN+qaGevm9OBYJUkvTST3BwEfqE7baVsukNDFwIDYxdW8LzAis3nTCFIJXNUSHBGiNbeEPlphOm8+8vClWAMevQK1RXlxqCGI2j0PzmZvfBWwhTrJBHCoYQpDKY3jvQy1oX1MIaYQpBKjcEvjaxRsqMlqyQAvQUoqW+cHM7sgylYg2ZPf1kFhizMJHJsIohLy0OcfM22RDiXrZ79z/pQgoNqNySH/o19CPt/kttjQq0p2ZTmJLJfva+Bc0RuePGcXNqmEImlZshxyqGqEAKSHzoV/GxJFIAOxc0oAJ3SFqYQpA27378vE6Qs1dg2pYWpof4YlLK4wsTHySPwwQj6SQIyKRNAeFd0BxpDnqCCWvKQx/+Vk08eE5+P9nLBxhQhaSE6SG+lAwWLnR5IR9gQGilZNP4Sk3A16M8NMc8HeIf1v/4J5ghrRLGShf4Yf3P8IKhsvgOqSfxBKN/No1f+Roe6PbPxJXbS++xj1PmdDUshVU8tXnubVjaFyZt9F/SL+tDr3aW3Sot+C0upbHuVmnBaxU7lf5FDU7wSyVh/lTSYXLtpLxRLOu74DaSvhcu4XTcLg4pgv/DI3GfeOxq5bdY34+35LWZqqR/QvjKq8bi07i7n2xMdeY7ozyvZbq51ftkqN4t1udl8TDdWZ3sTAghhBBCCCGEEEIIIYQQQgghhBBCCCHl8huXB2Yjc2JMtQAAAABJRU5ErkJggg==" alt="computer logo"/>					
		            <h1 className="header-h1">MHAC</h1>
				</div>
				<nav className="header-nav">
                    <h2 className="nav-item">
                    <Link to="/viewStudents">
                        View Students
                    </Link>
                    </h2>
                    <h2 className="nav-item">
                        <Link to="/enrollStudent">Enroll Students</Link>
                    </h2>
					<h2 className="nav-item">
                    <Link to="/">
						Log Out
                    </Link>
                    

                    </h2>
                    <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" className="icon-avatar2" alt="person icon"/>
				</nav>
			</header>
            <div className="container">
                <div>
                    <h2>Student Registration Form</h2>
                </div>
                <div>
                    {
                        message ? (
                            <div>
                                <h2 className="enroll-msg">{message}</h2>
                                <Link to="/viewStudents">
						            Go To Students Page
					            </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} >
                                <input id="first-name" className="input-enroll" placeholder="First Name" type="text" onChange={handleFirst} required />
                                <br/>
                                <input id="last-name" className="input-enroll" placeholder="Last Name" type="text" onChange={handleLast} required />
                                <br/>
                                <label htmlFor="campus">Location</label>
                                <select name="campus" id="campus" onChange={handleCampus}>
                                    <option value="Mars">Mars</option>
                                    <option value="Moon">Moon</option>
                                    <option value="Saturn">Saturn</option>
                                </select>
                                <br/>
                                <button className="enroll-btn" type="submit">Submit</button>
                                <button className="enroll-btn" type="">Cancel</button>
                            </form>
                        )
                    }
                    
                
                </div>
            </div>
        </div>
    )

}