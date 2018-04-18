import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className="Header">
      <a className="header-left header-left-resume" href="https://www.turing.io/sites/default/files/resumes/resume-3-3-18.pdf">
        <h5>Resume</h5>
      </a>
      <a className="header-left header-left-linkedin" href="https://www.linkedin.com/in/robert-a-morgan">
        <h5>LinkedIn</h5>
      </a>
      <a className="header-left header-left-github" href="https://github.com/rmorgan323">
        <h5>GitHub</h5>
      </a>
      <h1><span className="logo-left">ROB</span>ERTO</h1>
    </div>
  )
}

export default Header;