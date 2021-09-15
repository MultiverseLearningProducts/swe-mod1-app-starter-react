import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';

export const App = () => {

	const [user, setUser] = useState("")
	const [student, setStudents] = useState(["Abdi", "Sharon", "Elizabeth", "James"])


	// function handleClick(e) {
	// 	const updatedMessage = message + '🔥';
	// 	setMessage(updatedMessage)
	// }

	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch('http://localhost:3000/sauces');
	// 		const responseJSON = await response.json();
	// 		setSauces(responseJSON)
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchSauces()
	// }, []);

	return (
		<div>
			<div className="container">
			<header class="header">
				<div class="header-info">
                <img  id="logo" src="../resources/images/illo127.svg"/>					<h1 id="logo-tag">MHAC</h1>
				</div>
				<nav class="header-nav">
					<h3 class="nav-item">
						<a href="#" class="nav-link">Profile</a>
                    </h3>
                    <h3 class="nav-item">
                            <a href="#" class="nav-link">View Students</a>
                        </h3>
                        <h3 class="nav-item">
                                <a href="#" class="nav-link">Enroll Students</a>
                            </h3>
            
					<h3 class="nav-item">
						<a href="#" class="nav-link">Log Out</a>
                    </h3>
                    <img src="../resources/images/avatar.png" class="icon-avatar2" alt=""/>

				</nav>
			</header>
			<main class="main">
                    <div class="dropdown">
                            <form action="">
                                <h1>Filter by location</h1>
                                <div class="dropdown-content">
                                    <a href="#">
                                            <img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" width="20" height="15"/>MARS</a>
                                    <a href="#"><br/>
                                            <img src="https://www.pngonly.com/wp-content/uploads/2018/11/picture-moon-png-10205.png" width="20" height="15"/>MOON</a>
                                    <a href="#"><br/>
                                            <img src="data:image/jpeg;base64,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" width="20" height="15"/>SATURN</a>

                                    <a href="#"><br/>
                                            <img src="https://images.mypandit.com/myPandit_web/images/blog/5_Planets_Stellelium.jpg" width="20" height="15"/>ALL</a> 
                                </div>
							</form>
                    
                    </div>
                    <div class="table-container">
                    	<table class="table">
                        	<thead>
								<tr>
                              		<th>First Name</th>
                              		<th>Last Name</th>
                              		<th>Location</th>
                              		<th>Actions</th>
                            	</tr>
							</thead>
                        	<tbody>
								<tr>
                              		<td>Alfreds </td>
                              		<td>Maria </td>
                              		<td>Saturn</td>
                              		<td><a href="">Unenroll</a>
                              		</td>
                            	</tr>
                            	<tr>
                                	<td>Alfreds </td>
									<td>Maria </td>
									<td>Saturn</td>
									<td><a href="">Unenroll</a>
									</td>
                            	</tr>
                            	<tr>
									<td>Alfreds </td>
									<td>Maria </td>
									<td>Saturn</td>
									<td><a href="">Unenroll</a>
									</td>
                            	</tr> 
                            	<tr>
									<td>Alfreds </td>
									<td>Maria </td>
									<td>Saturn</td>
									<td><a href="">Unenroll</a>
									</td>
                            	</tr>
							</tbody>
                    	</table>    
                	</div>
				</main>
				<footer class="footer">
				</footer>
			</div>
			{/* <div class="header-container">
        		<header class="header">
            		<img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABLS0u3t7fr6+v19fWUlJTg4OCGhob6+vo6OjpQUFA+Pj7d3d3Ly8vu7u5wcHBra2ugoKB/f3+NjY1XV1fR0dEODg41NTW5ubkgICBhYWGbm5uurq4bGxvExMQoKCh2dnYuLi4VFRVkZGTQk3svAAAES0lEQVR4nO2dUVfiMBCFRShQFRVFBQEB3f//G1eXTCVXe7rbzEyynvs95qHhi9PppKnJ2RkhhBBCCCGEEEIIIYQQQgghhBBCSNFUs+1m7M1mO7tx8nucvwzy8LTeOfhNLjPpHbl6tBa8y+r3wcJWcJHb751bS8FNbrs/3NsJXud2CwzNDHPl0C9URoL5s4xglW2ec4t9YiP4mFvrBJsnfzlBOhhMTQxvc2ud8GBi+JBb64RzE8O4IJ1PfTlEvV85GJpXwMDE3fDapI92ZjRUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtry8w39/w94OPFl526YFxr24zy31gmvtYHgpLtfRyw2PChpaxObPXhKug3fw1RfcJTbCZipG25zKwFjdcOr3ErAk7bgDXSwqCtf6nv4BdphikGqfxt0MYNfoB2m8Lg3SGWd7E1/AmbSO93L/xX4QNYNIwzSsBts7cOxMxxl3TCFfb7CZmKj5YULYTyh5lCtvjGTbo/Nq4EPYYc9DKSJoiFeO+w9+cvJcH7sroJmzTBdx5cOu8BWXltF7sOIzuNmxTDFwQtR47dVZJgr7aBZL0yH8YWfQ3KbuhmGjSBrCJqNmiFkUtnH99XNcBl6hMptryWIQRpixnPSH+IR7wutMIWHglT1npN+qaGevm9OBYJUkvTST3BwEfqE7baVsukNDFwIDYxdW8LzAis3nTCFIJXNUSHBGiNbeEPlphOm8+8vClWAMevQK1RXlxqCGI2j0PzmZvfBWwhTrJBHCoYQpDKY3jvQy1oX1MIaYQpBKjcEvjaxRsqMlqyQAvQUoqW+cHM7sgylYg2ZPf1kFhizMJHJsIohLy0OcfM22RDiXrZ79z/pQgoNqNySH/o19CPt/kttjQq0p2ZTmJLJfva+Bc0RuePGcXNqmEImlZshxyqGqEAKSHzoV/GxJFIAOxc0oAJ3SFqYQpA27378vE6Qs1dg2pYWpof4YlLK4wsTHySPwwQj6SQIyKRNAeFd0BxpDnqCCWvKQx/+Vk08eE5+P9nLBxhQhaSE6SG+lAwWLnR5IR9gQGilZNP4Sk3A16M8NMc8HeIf1v/4J5ghrRLGShf4Yf3P8IKhsvgOqSfxBKN/No1f+Roe6PbPxJXbS++xj1PmdDUshVU8tXnubVjaFyZt9F/SL+tDr3aW3Sot+C0upbHuVmnBaxU7lf5FDU7wSyVh/lTSYXLtpLxRLOu74DaSvhcu4XTcLg4pgv/DI3GfeOxq5bdY34+35LWZqqR/QvjKq8bi07i7n2xMdeY7ozyvZbq51ftkqN4t1udl8TDdWZ3sTAghhBBCCCGEEEIIIYQQQgghhBBCCCHl8huXB2Yjc2JMtQAAAABJRU5ErkJggg=="/>
            		<h2>MHAC</h2>
        		</header>
        		<h1 class="teacher-connect">Teachers Connect</h1>
    		</div>

    		<div class="main-container">
        		<div class="avatar-container">
            		<img class="avatar-image" src="data:image/png;base64,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" class="icon-avatar" alt=""/>
        		</div>
        
        		<div class="login">
            		<form action="">
                		<input id="username" placeholder="Username" type="text"/> <br/>
                		<input id="password" placeholder="Password" type="text" required/><br/>
                		<button type="submit">Login</button>
            		</form>
        		</div>
        
    		</div> */}
		</div>
	)
}