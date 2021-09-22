import React from "react";
import Slider from "./Slider"
import HomeItem from "./HomeItem"

export default function Home() {
    

    return (
    <div>
        <div className="home-page">
         <Slider/>
        </div>
            <br/>
            <br/>
            <br/>
        <div>
         <HomeItem/>
        </div>
    </div>                                      
    );
}