// import { React } from "react";

// const Navbar = () => {
//     return(
//         <>

//         </>
//     )
// }

// export default Navbar;

import { React } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './MyNavbar.css';

const MyNavbar = (props) => {
    console.log("PROPS", props.theme);
    return(
        <>
            <Navbar 
                fixed="top" 
                collapseOnSelect 
                expand="md" 
                bg={props.theme} 
                variant={props.theme}
                className="animate-navbar nav-theme justify-content-between"
            >
            <span 
                onClick={() => props.click()} 
                title="Switch to the dark theme" 
                aria-hidden="true" 
                className={`toggle-theme ${props.theme === 'light' ? "fa fa-moon-o": "fa fa-sun-o"}`}
                style={{cursor: "pointer"}}
            >
            </span>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;