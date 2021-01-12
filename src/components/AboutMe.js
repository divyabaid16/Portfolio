import { React } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile from "../assets/img/self-pic.jpeg";
import './AboutMe.css';

const AboutMe = () => {
    return(
        <>
            <div id="about">
                <Container className="about-me">
                <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>
                    <Row>
                        <Col md={4} className = "profile-pic-warpper">
                                <Image className="justify-content-end profile-pic" src={profile} roundedCircle />
                        </Col>
                        <Col md={8}>
                            <div>
                                <p>I'm Divya Baid, an ordinary girl with extra ordinary dreams. I create things with curiosity and believe that both hardwork and smartwork are equally important.</p>
                                <p>I love developing things. I see detail in products and well as the code that I read or write.</p>
                                <p>Being an Computer Science graduate, technology is something which I'm surrounded with, but that's not all. I am a colorful person and like art and craft, trekking, playing physical games that make me sweat. Also, my social media feed is filled with cooking videos, something which I love doing whenever I wish to experiment out things.</p>
                                <p>I strongly believe in team spirit and am always open to collaborate on anything (may take some time to learn the thing, but would hardly say no to something new provided it doesn't hamper my work).</p>
                                <p>I'm on a journey of 360 degree development, with a big smile on my face, heart full of kindness and helping hands.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutMe;