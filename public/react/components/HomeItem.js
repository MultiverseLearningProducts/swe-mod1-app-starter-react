import React from "react";
import Fourth from "./assets/Fourth.jpg";
import Third from "./assets/Third.jpg";
import { Container, Row, Col } from 'reactstrap';

export default function HomeItem() {
    

    return (
        <div>
                <img src={ Fourth } style={{ width: "48rem", height: "30rem"}} alt="plant1" />
                <br/>
                <br/>
            <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                    <img src={ Third }  style={{ width: "48rem", height: "30rem"}} id="plant2" />
                </Col>
            </Row>
        </div>

    );
}