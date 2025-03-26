import React, { useEffect } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Education from "./Education/Education"
import AOS from 'aos';
import "aos/dist/aos.css"
import "./About.css"
import CodeRight from "./CodeRight.svg"

export default function About() {
    useEffect(()=>{
        AOS.init({ duration: 3000});
    },[])

    return (
        <Container id="About" style={{marginTop: "9.375rem"}}>
            <div className="About" data-aos="fade-up" data-aos-once="false">
                <Row>
                    <Col>
                        <h2 className="h mb-4 d-flex align-items-center justify-content-center justify-content-md-start">About Me</h2>
                    </Col>
                </Row>
                <Row className="t2">
                    <Col md={4} className="p-3 d-md-flex align-items-center justify-content-center">
                        <Image src={CodeRight} fluid />
                    </Col>
                    <Col md={8}>
                        <p>
                        Passionate MERN Stack Developer eager to build scalable, high-performance web applications using React.js, Node.js, Express.js, and MongoDB. I love writing clean, efficient code, optimizing performance, and crafting seamless user experiences with modern web technologies.
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
