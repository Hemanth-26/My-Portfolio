import React from "react"
import "./Skills.css"
import { Container, Row, Col, Image } from "react-bootstrap"
import CarousalSkills from "./CarousalSkills"
import ImgReact from "../ReactJs.svg"


export default function Skills() {
    return (
        <Container>
            <div className="Skills">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="h mb-3 d-flex align-items-center justify-content-start">Skills</h2>
                    </Col>
                    <Col>
                        <Image src={ImgReact} className="mb-3" fluid />
                    </Col>
                </Row>
            </div>
            <div className="ListSkill">
                <CarousalSkills />
            </div>
        </Container>
    )
}
