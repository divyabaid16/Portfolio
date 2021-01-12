import { React } from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import './MyTitle.css'

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -155px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }
  }
`;

const MyTitle = () => {
    return(
        <MyTitleMessage>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                    Hi, I'm
                    <br />
                    <span>
                        <strong>Divya Baid</strong>
                    </span>
                    </div>
                    <div className="sub">
                    <Typewriter
                        options={{
                        strings: ["Engineer", "Consultant", "Web Developer", "Forever Learner"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                        }}
                    />
                    </div>
                    <div>
                      <a class="btn facebook" target="_blank" href="https://www.facebook.com/divyabaid123">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                      <a class="btn github" target="_blank" href="https://github.com/divyabaid16/">
                        <i class="fab fa-github"></i>
                      </a>
                      <a class="btn linkedin" target="_blank" href="https://www.linkedin.com/in/divya-baid/">
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a class="btn email" href = "mailto: divyabaid16@gmail.com">
                        <i class="fa fa-envelope"></i>
                      </a>
                      <a class="btn instagram" target="_blank" href="https://www.instagram.com/db__divya/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                </div>
            </div>
        </MyTitleMessage>
    )
}

export default MyTitle