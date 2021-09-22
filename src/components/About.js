import React from "react"
import "./About.css"
import { Container, Row, Col, Image } from "react-bootstrap"
import CodeRight from "../CodeRight.svg"
import Education from "./Education"

export default function About() {
    return (
        <Container>
            <div className="About">
                <Row>
                    <Col>
                        <h2 className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">About Me</h2>
                    </Col>
                </Row>
                <Row className="t2">
                    <Col md={4} className="p-3 d-md-flex align-items-center justify-content-center">
                        <Image src={CodeRight} fluid />
                    </Col>
                    <Col md={8}>
                        <p>
                            To take a challenging role as Front-End Developer in a highly technical company where I could utilize my skills in Front-End Development. Looking to utilize my technology and leadership skills in an esteemed organization.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="Education">
                <Row>
                    <Education />
                </Row>
            </div>
        </Container>
    )
}
