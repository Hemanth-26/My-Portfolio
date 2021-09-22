import React from "react"
import "./Home.css"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import Human from "../Human.svg"

export default function Home() {
    return (
        <Container>
            <div className="Home">
                <Row>
                    <Col lg={4}>
                        <h3 className="t1 text-muted">Hi There ! </h3>
                        <h2 className="t1">I AM HEMANTH</h2>
                        <h5 className="t1">Front-End Developer</h5>
                        <Button variant="outline-primary">Hire Me...</Button>
                    </Col>
                    <Col lg={8}>
                        <Image src={Human} fluid/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
