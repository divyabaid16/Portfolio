import { React } from "react";
import Image from 'react-bootstrap/Image'
import './Skills.css';

import BOOTSTRAP from "../assets/img/skills/bootstrap-4.svg";
import JAVASCRIPT from "../assets/img/skills/javascript.svg";
import HTML from "../assets/img/skills/html-5.svg";
import REACT from "../assets/img/skills/react.svg";
import GIT from "../assets/img/skills/github.svg";
import CPP from "../assets/img/skills/cpp.svg";
import CSS from "../assets/img/skills/css3.svg";
import MYSQL from "../assets/img/skills/mysql.svg";
import PYTHON from "../assets/img/skills/python.svg";
import RAILS from "../assets/img/skills/rails.svg";
// import BOOTSTRAP from "../assets/img/skills/bootstrap-4.svg";

export const skills = [
    {
        link: "https://getbootstrap.com/",
        imgAltText: "Bootstrap",
        imgSrc: BOOTSTRAP,
        skillName: "Bootstrap",
    },
    {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: JAVASCRIPT,
        skillName: "JavaScript",
    },
    {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: REACT,
        skillName: "React JS",
    },
    {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: HTML,
        skillName: "HTML5",
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        imgAltText: "CSS",
        imgSrc: CSS,
        skillName: "CSS",
    },
    {
        link: "https://www.mysql.com/",
        imgAltText: "MYSQL",
        imgSrc: MYSQL,
        skillName: "MYSQL",
    },
    {
        link: "https://www.python.org/",
        imgAltText: "Python",
        imgSrc: PYTHON,
        skillName: "Python",
    },
    {
        link: "https://www.cplusplus.com/",
        imgAltText: "CPP",
        imgSrc: CPP,
        skillName: "CPP",
    },
    {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: GIT,
        skillName: "GIT",
    },
    {
        link: "https://guides.rubyonrails.org/",
        imgAltText: "RAILS",
        imgSrc: RAILS,
        skillName: "RUBY ON RAILS",
    },
    
]

const Skills = () => {
    return(
        <>
        <div id = "skills">
        <h1 className="pt-3 text-center pb-3">SKILLS</h1>
             {
                skills.map((skill, index) => (
                    <div className="p-2 skill-block" key={index}>
                      <a className="text-decoration-none skill-name" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="skill-image m-1"></Image> 
                        <p className="skill-name">{skill.skillName}</p>
                      </a>
                    </div>
            ))}
        </div>
        </>
    )
}

export default Skills;