import React from "react"
import "./Resume.css"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import ResumeImg from "../Resume.svg"

export default function Resume() {
    return (
        <Container>
            <div className="Resume">
                <Row>
                    <Col>
                        <h2 className="h mb-3 d-flex align-items-center justify-content-start">Resume</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="text-muted">Hello,</h3>
                        <p className="p fw-light text-break">I am Hemanth, front-end developer from Chennai, India. I have knowledge in website and Web design, also I am good at PWA.</p>
                    </Col>
                    <Col className="d-flex justify-content-evenly">
                        <Image src={ResumeImg} className="mb-3" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-column flex-lg-row justify-content-around">
                        <h6>To Download My Resume: </h6>
                        <Button>Download CV</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
