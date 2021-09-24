import React from "react";
import Fourth from "./assets/Fourth.jpg";
import Third from "./assets/Third.jpg";
import Eighth from "./assets/Eighth.jpg";
import Fifth from "./assets/Fifth.jpg";
import Ninth from "./assets/Ninth.jpg";

export default function HomeItem() {
    

    return (
    
        <div>        
            <div className="home-item-p">
                <div className="home-item-left">
                    <img src={ Fourth }  id="plant1" />
                </div>
                <br/>            
                <div className="home-item-right">
                    <img src={ Fifth } id="plant2" />
                </div>
            </div>          
            <div className="home-item-p2">
                <div className="home-item-left">
                    <img src={ Eighth }  id="coffee1" />
                </div>
                <br/>            
                <div className="home-item-right">
                    <img src={ Third } id="coffee2" />
                </div>
            </div>
        </div> 

    );
}
