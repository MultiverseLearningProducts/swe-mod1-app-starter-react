import React, { useState } from "react";
import {Route, Link 
} from 'react-router-dom';

export const LoginContainer = (props) => {


	return (
		<div>	
			<div class="header-container">
        		<header class="header">
            		<img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABLS0u3t7fr6+v19fWUlJTg4OCGhob6+vo6OjpQUFA+Pj7d3d3Ly8vu7u5wcHBra2ugoKB/f3+NjY1XV1fR0dEODg41NTW5ubkgICBhYWGbm5uurq4bGxvExMQoKCh2dnYuLi4VFRVkZGTQk3svAAAES0lEQVR4nO2dUVfiMBCFRShQFRVFBQEB3f//G1eXTCVXe7rbzEyynvs95qHhi9PppKnJ2RkhhBBCCCGEEEIIIYQQQgghhBBCSNFUs+1m7M1mO7tx8nucvwzy8LTeOfhNLjPpHbl6tBa8y+r3wcJWcJHb751bS8FNbrs/3NsJXud2CwzNDHPl0C9URoL5s4xglW2ec4t9YiP4mFvrBJsnfzlBOhhMTQxvc2ud8GBi+JBb64RzE8O4IJ1PfTlEvV85GJpXwMDE3fDapI92ZjRUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtpCQw1oaAsNNaChLTTUgIa20FADGtry8w39/w94OPFl526YFxr24zy31gmvtYHgpLtfRyw2PChpaxObPXhKug3fw1RfcJTbCZipG25zKwFjdcOr3ErAk7bgDXSwqCtf6nv4BdphikGqfxt0MYNfoB2m8Lg3SGWd7E1/AmbSO93L/xX4QNYNIwzSsBts7cOxMxxl3TCFfb7CZmKj5YULYTyh5lCtvjGTbo/Nq4EPYYc9DKSJoiFeO+w9+cvJcH7sroJmzTBdx5cOu8BWXltF7sOIzuNmxTDFwQtR47dVZJgr7aBZL0yH8YWfQ3KbuhmGjSBrCJqNmiFkUtnH99XNcBl6hMptryWIQRpixnPSH+IR7wutMIWHglT1npN+qaGevm9OBYJUkvTST3BwEfqE7baVsukNDFwIDYxdW8LzAis3nTCFIJXNUSHBGiNbeEPlphOm8+8vClWAMevQK1RXlxqCGI2j0PzmZvfBWwhTrJBHCoYQpDKY3jvQy1oX1MIaYQpBKjcEvjaxRsqMlqyQAvQUoqW+cHM7sgylYg2ZPf1kFhizMJHJsIohLy0OcfM22RDiXrZ79z/pQgoNqNySH/o19CPt/kttjQq0p2ZTmJLJfva+Bc0RuePGcXNqmEImlZshxyqGqEAKSHzoV/GxJFIAOxc0oAJ3SFqYQpA27378vE6Qs1dg2pYWpof4YlLK4wsTHySPwwQj6SQIyKRNAeFd0BxpDnqCCWvKQx/+Vk08eE5+P9nLBxhQhaSE6SG+lAwWLnR5IR9gQGilZNP4Sk3A16M8NMc8HeIf1v/4J5ghrRLGShf4Yf3P8IKhsvgOqSfxBKN/No1f+Roe6PbPxJXbS++xj1PmdDUshVU8tXnubVjaFyZt9F/SL+tDr3aW3Sot+C0upbHuVmnBaxU7lf5FDU7wSyVh/lTSYXLtpLxRLOu74DaSvhcu4XTcLg4pgv/DI3GfeOxq5bdY34+35LWZqqR/QvjKq8bi07i7n2xMdeY7ozyvZbq51ftkqN4t1udl8TDdWZ3sTAghhBBCCCGEEEIIIYQQQgghhBBCCCHl8huXB2Yjc2JMtQAAAABJRU5ErkJggg=="alt="computer logo"/>
            		<h1>MHAC</h1>
        		</header>
        		<h2 class="teacher-connect">Teachers Connect</h2>
    		</div>
    		<div class="main-container">
        		<div class="avatar-container">
            		<img class="icon-avatar"  src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" alt="person logo"/>
        		</div>
        
        		<div class="login">
            		<form action="">
                		<label for="username">Username: </label>
						<input id="username" placeholder="Username" type="text" required/> <br/>
                		<label for="password">Password: </label>
						<input id="password" placeholder="Password" type="text" required/><br/>
						<Link to="/viewStudents">
                		<button class="login-btn" type="submit">Login</button>
						</Link>
            		</form>
        		</div>
    		</div>
		</div>
	)

}