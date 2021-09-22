import React from "react";
import Fourth from "./assets/Fourth.jpg";
import Third from "./assets/Third.jpg";
import { Container, Row, Col } from 'reactstrap';

export default function HomeItem() {
    

    return (
            <div className="home-item-p">
                <div className="home-item-left">
                    <img src={ Fourth }  alt="plant1" />
                </div>
                <br/>
                <br/>
            
                <div className="home-item-right">
                    <img src={ Third } id="plant2" />
                </div>
        </div>

    );
}
