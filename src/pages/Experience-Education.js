import { React } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DPS from "../assets/img/education/dps.png";
import LNMIIT from "../assets/img/education/lnmiit.png";
import EXPEDIA from "../assets/img/experience/expedia.png";
import MICROSOFT from "../assets/img/experience/microsoft.png";
import POSTMAN from "../assets/img/experience/postman.png";
import GCI from "../assets/img/experience/gci.png";
import GSOC from "../assets/img/experience/gsoc.png";
import Image from 'react-bootstrap/Image'


import './Experience-Education.css';

export const experience = [
    {
        "icon": EXPEDIA,
        "title": "Expedia",
        "subtitle": "Software Development Engineer",
        "period": "May'21 - Present",
        "technology": "Aws, Java, Spring"
    },
    {
        "icon": MICROSOFT,
        "title": "Microsoft",
        "subtitle": "Associate Consultant",
        "period": "Aug'20 - May'21",
        "technology": "SQL, Azure, PowerBI, Databricks, Python"
    },
    {
        "icon": POSTMAN,
        "title": "Postman",
        "subtitle": "Software Engineering Intern",
        "period": "Jan'20 - Jun'20",
        "technology": "ReactJS, NodeJS, SailsJs, Redux, MobX"
    },
    {
        "icon": GCI,
        "title": "Google Code-in",
        "subtitle": "Student Mentor",
        "period": "Dec '19 - Jan '19",
        "technology": "Ruby on Rails, HTML, CSS"
    },
    {
        "icon": GSOC,
        "title": "Google Summer of Code",
        "subtitle": "Student developer @Public Lab",
        "period": "May '19 - Aug '19",
        "technology": "Ruby on Rails, Javascript, HTML, CSS, Documentation, GIT"
    }
];

export const education = [
    {
        "icon": LNMIIT,
        "title": "The LNM Institute of Information Technology, Jaipur",
        "subtitle": "Bachelor's Degree in Communication and Computer Engineering",
        "period": "2016 - 2020"
    },
    {
        "icon": DPS,
        "title": "Delhi Public School Vadodara",
        "subtitle": "Class XI - XII",
        "period": "2014 - 2016"
    },
    {
        "icon": DPS,
        "title": "Delhi Public School Vadodara",
        "subtitle": "Elementary and Primary School",
        "period": "2004 - 2014"
    }
];

const Experience = (props) => {
    return(
        <>
            <div id = "experience-education">
                <Container>
  <Row>
    <Col md={6}>
        <div id = "experience">
        <h1 className="pt-3 text-center pb-3">EXPERIENCE</h1>
    <VerticalTimeline
                    layout={ '1-column-left' }
                >
                    {
                        experience.map((edu, index) => (
                            <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={edu.period}

                            contentArrowStyle={ {display: 'none'} }
    
                            key = {index}
                          >
                            <Row>
                                <Col sm = {8}>
                                    <h3 className="vertical-timeline-element-title">{edu.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
                                    <br></br>
                                    <h4 className="vertical-timeline-element-subtitle">{edu.technology}</h4>
                                    </Col>
                                    <Col sm = {4}>
                                    <Image src={edu.icon} rounded className="skill-image m-1"></Image> 
                                </Col>
                            </Row>
                          </VerticalTimelineElement>
                        ))
                    }
 
  </VerticalTimeline>
  </div>
    </Col>
    <Col md={6}>
        <div id = "education">
        <h1 className="pt-3 text-center pb-3">EDUCATION</h1>
    <VerticalTimeline id = "education"
                    layout={ '1-column-left' }
                >
                    {
                        education.map((edu, index) => (
                            <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date={edu.period}

                            contentArrowStyle={ {display: 'none'} }
    
                            key = {index}
                          >
                            <Row>
                                <Col sm = {8}>
                                    <h3 className="vertical-timeline-element-title">{edu.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
                                </Col>
                                <Col sm = {4}>
                                    <Image src={edu.icon} rounded className="skill-image"></Image> 
                                </Col>
                            </Row>
                          </VerticalTimelineElement>
                        ))
                    }
 
  </VerticalTimeline>
  </div>
    </Col>
  </Row>
  </Container>
              </div>
        </>
    )
}

export default Experience;
