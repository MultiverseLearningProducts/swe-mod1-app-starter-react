import React, { useState, useEffect } from "react";
import { labeledStatement } from "@babel/types";

export const ViewStudentContainer = (props) => {

	const [selectedItem, setSelectedItem] = useState('')

	const handleChange = (e) => {
		// console.log('what does our event look like? ', e)
		// console.log('what does our event target look like? ', e.target)
		// console.log('what does our event target value look like? ', e.target.value)
		// console.log("what item is selected? ", props.items[e.target.value])

		const selected = props.items[e.target.value];
		setSelectedItem(selected)
	}

	return (
		<div className="container">
			<header className="header">
				<div className="header-info">
                <img  id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABLS0u3t7fr6+v19fWUlJTg4OCGhob6+vo6OjpQUFA+Pj7d3d3Ly8vu7u5wcHBra2ugoKB/f3+NjY1XV1fR0dEODg41NTW5ubkgICBhYWGbm5uurq4bGxvExMQoKCh2dnYuLi4VFRVkZGTQk3svAAAES0lEQVR4nO2dUVfiMBCFRShQFRVFBQEB3f//G1eXTCVXe7rbzEyynvs95qHhi9PppKnJ2RkhhBBCCCGEEEIIIYQQQgghhBBCSNFUs+1m7M1mO7tx8nucvwzy8LTeOfhNLjPpHbl6tBa8y+r3wcJWcJHb751bS8FNbrs/3NsJXud2CwzNDHPl0C9URoL5s4xglW2ec4t9YiP4mFvrBJsnfzlBOhhMTQxvc2ud8GBi+JBb64RzE8O4IJ1PfTlEvV85GJpXwMDE3fDapI92ZjRUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtry8w39/w94OPFl526YFxr24zy31gmvtYHgpLtfRyw2PChpaxObPXhKug3fw1RfcJTbCZipG25zKwFjdcOr3ErAk7bgDXSwqCtf6nv4BdphikGqfxt0MYNfoB2m8Lg3SGWd7E1/AmbSO93L/xX4QNYNIwzSsBts7cOxMxxl3TCFfb7CZmKj5YULYTyh5lCtvjGTbo/Nq4EPYYc9DKSJoiFeO+w9+cvJcH7sroJmzTBdx5cOu8BWXltF7sOIzuNmxTDFwQtR47dVZJgr7aBZL0yH8YWfQ3KbuhmGjSBrCJqNmiFkUtnH99XNcBl6hMptryWIQRpixnPSH+IR7wutMIWHglT1npN+qaGevm9OBYJUkvTST3BwEfqE7baVsukNDFwIDYxdW8LzAis3nTCFIJXNUSHBGiNbeEPlphOm8+8vClWAMevQK1RXlxqCGI2j0PzmZvfBWwhTrJBHCoYQpDKY3jvQy1oX1MIaYQpBKjcEvjaxRsqMlqyQAvQUoqW+cHM7sgylYg2ZPf1kFhizMJHJsIohLy0OcfM22RDiXrZ79z/pQgoNqNySH/o19CPt/kttjQq0p2ZTmJLJfva+Bc0RuePGcXNqmEImlZshxyqGqEAKSHzoV/GxJFIAOxc0oAJ3SFqYQpA27378vE6Qs1dg2pYWpof4YlLK4wsTHySPwwQj6SQIyKRNAeFd0BxpDnqCCWvKQx/+Vk08eE5+P9nLBxhQhaSE6SG+lAwWLnR5IR9gQGilZNP4Sk3A16M8NMc8HeIf1v/4J5ghrRLGShf4Yf3P8IKhsvgOqSfxBKN/No1f+Roe6PbPxJXbS++xj1PmdDUshVU8tXnubVjaFyZt9F/SL+tDr3aW3Sot+C0upbHuVmnBaxU7lf5FDU7wSyVh/lTSYXLtpLxRLOu74DaSvhcu4XTcLg4pgv/DI3GfeOxq5bdY34+35LWZqqR/QvjKq8bi07i7n2xMdeY7ozyvZbq51ftkqN4t1udl8TDdWZ3sTAghhBBCCCGEEEIIIYQQQgghhBBCCCHl8huXB2Yjc2JMtQAAAABJRU5ErkJggg=="/>					
		<h1>MHAC</h1>
				</div>
				<nav className="header-nav">
					<h3 className="nav-item">
						<a href="#" className="nav-link">Profile</a>
                    </h3>
                    <h3 className="nav-item">
                            <a href="#" className="nav-link">View Students</a>
                        </h3>
                        <h3 className="nav-item">
                                <a href="#" className="nav-link">Enroll Students</a>
                            </h3>
            
					<h3 className="nav-item">
						<a href="#" className="nav-link">Log Out</a>
                    </h3>
                    <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" className="icon-avatar2" alt=""/>

				</nav>
			</header>
			<main className="main">
                    <div className="dropdown">
                            {/* <form action=""> */}
                                <label>Filter by location</label>
				<select onChange={handleChange}>
				<option value=""></option>
				{
						props.items.map((item, idx) => {
							return <option key={idx} value={idx} >{item.name}</option>
						})
					}
                                {/* <div className="dropdown-content">
                                    <a href="#">
                                            <img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" width="20" height="15"/>MARS</a>
                                    <a href="#"><br/>
                                            <img src="https://www.pngonly.com/wp-content/uploads/2018/11/picture-moon-png-10205.png" width="20" height="15"/>MOON</a>
                                    <a href="#"><br/>
                                            <img src="data:image/jpeg;base64,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" width="20" height="15"/>SATURN</a>

                                    <a href="#"><br/>
                                            <img src="https://images.mypandit.com/myPandit_web/images/blog/5_Planets_Stellelium.jpg" width="20" height="15"/>ALL</a> 
                                </div> */}
				</select>
							{/* </form> */}
                    
                    </div>
                    <div className="table-container">
					<table> 
					{
					props.items.map((item, idx) => {
						return 
							
								<tr> 
							<td></td>
							<td></td>
						</tr>  
					
						
					})
				
  		/* <tr>
    	  <th>First Name</th>
    	  <th>Last Name</th>
    	  <th>Location</th>
		  <th>Actions</th>
        </tr>
  		<tr>
  	      <td>Alfreds </td>
  	      <td>Maria </td>
  	      <td>Saturn </td>
  	      <td><a href="">Unenroll</a></td>                           	
  		</tr>
  		<tr>
		  <td>Ben</td>
  	      <td>Tate</td>
  	      <td>Mars</td>
  	      <td><a href="">Unenroll</a></td>
  		</tr>
		<tr>
		  <td>Charles</td>
  	      <td>Smith</td>
  	      <td>Moon</td>
  	      <td><a href="">Unenroll</a></td>
  		</tr>
		<tr>
		  <td>Dan</td>
  	      <td>Hooks</td>
  	      <td>Saturn</td>
  	      <td><a href="">Unenroll</a></td>
  		</tr>
		  <tr>
		  <td>Eric</td>
  	      <td>Taylor</td>
  	      <td>Mars</td>
  	      <td><a href="">Unenroll</a></td>
  		</tr> */}
 	</table>    
                	</div>
				</main>
				<footer className="footer">
				</footer>
			</div>
		
	)


}
