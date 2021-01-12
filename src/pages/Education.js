import { React } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DPS from "../assets/img/education/dps.png";
import LNMIIT from "../assets/img/education/lnmiit.png";
import Image from 'react-bootstrap/Image'

// import './Education.css';

export const education = [
    {
        "icon": LNMIIT,
        "title": "The LNM Institute of Information Technology, jaipur",
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

const Education = (props) => {
    return(
        <>
            <div id = "education">
                <h1 className="pt-3 text-center pb-3">EDUCATION</h1>
                <VerticalTimeline>
                    {
                        education.map((edu, index) => (
                            <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"

                            contentArrowStyle={ {display: 'none'} }
    
                            key = {index}
                          >
                            <h3 className="vertical-timeline-element-title">{edu.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
                          </VerticalTimelineElement>
                        ))
                    }
 
  </VerticalTimeline>
            </div>
        </>
    )
}

export default Education;