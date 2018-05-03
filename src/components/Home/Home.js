import React, { Component } from 'react';
import './Home.css';
import Typed from 'typed.js';

class Home extends Component {

  componentDidMount = () => {

    window.addEventListener('scroll', this.handleScroll);

    const options = {
      strings: ["Hi, I'm Rob Morgan."],
      showCursor: false,
      typeSpeed: 28,
      startDelay: 900
    }
    const options2 = {
      strings: ["I'm a web developer."],
      typeSpeed: 20,
      showCursor: false,
      startDelay: 2800
    }
    const options3 = {
      strings: ["I like to build stuff. ^900 I even like to test it. ^900 Here's some stuff I've built."],
      typeSpeed: 20,
      showCursor: false,
      startDelay: 4500
    }
    const options4 = {
      strings: ["It's this way."],
      typeSpeed: 20,
      backSpeed: 30,
      showCursor: false,
      startDelay: 10000
    }
    const options5 = {
      strings: ["&#8595;"],
      typeSpeed: 20,
      backSpeed: 40,
      showCursor: false,
      startDelay: 11000
    }

    this.typed = new Typed(this.element, options);
    this.typed = new Typed(this.element2, options2);
    this.typed = new Typed(this.element3, options3);
    this.typed = new Typed(this.element4, options4);
    this.typed = new Typed(this.element5, options5);

  }

  componentWillUnmount = () => {
    this.typed.destroy();
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 270) {
      document.querySelector('.Header').classList.add('header-size');
      document.querySelector('.Header h1').classList.add('logo-size');
      document.querySelector('.Header .header-left-resume').classList.add('resume-small');
      document.querySelector('.Header .header-left-linkedin').classList.add('linkedin-small');
      document.querySelector('.Header .header-left-github').classList.add('github-small');
    }

    if (window.scrollY <= 270) {
      document.querySelector('.Header').classList.remove('header-size');
      document.querySelector('.Header h1').classList.remove('logo-size');
      document.querySelector('.Header .header-left-resume').classList.remove('resume-small');
      document.querySelector('.Header .header-left-linkedin').classList.remove('linkedin-small');
      document.querySelector('.Header .header-left-github').classList.remove('github-small');
    }

    if (window.scrollY <= 270) {
      document.querySelector('.Home').classList.remove('green-bg');
      document.querySelector('.logo-left').classList.remove('logo-green');
      document.querySelector('h1').classList.remove('logo-text-green');
      const nodes = [].slice.call(document.querySelectorAll('.Header h5'));
      nodes.map(node => node.classList.remove('green-text'));
    }
    if (window.scrollY > 270) {
      document.querySelector('.Home').classList.add('green-bg');
      document.querySelector('.logo-left').classList.add('logo-green');
      document.querySelector('h1').classList.add('logo-text-green');

      const nodes = [].slice.call(document.querySelectorAll('.Header h5'));
      nodes.map(node => node.classList.add('green-text'));
    }
    if (window.scrollY <= 1600) {
      document.querySelector('.Home').classList.remove('red-bg');
      document.querySelector('.logo-left').classList.remove('logo-red');
      document.querySelector('h1').classList.remove('logo-text-red');
      const nodes = [].slice.call(document.querySelectorAll('.Header h5'));
      nodes.map(node => node.classList.remove('red-text'));
    }
    if (window.scrollY > 1600) {
      document.querySelector('.Home').classList.add('red-bg');
      document.querySelector('.logo-left').classList.add('logo-red');
      document.querySelector('h1').classList.add('logo-text-red');
      const nodes = [].slice.call(document.querySelectorAll('.Header h5'));
      nodes.map(node => node.classList.add('red-text'));
    }
  }


  render() {
    return (
      <div className="Home">
        <span
          ref={(element) => { this.element = element; }}
        ></span><br /><br /><br />
        <span
          ref={(element2) => { this.element2 = element2; }}
        ></span><br />
        <span
          ref={(element3) => { this.element3 = element3; }}
        ></span><br /><br /><br />
        <span
          className="element4"
          ref={(element4) => { this.element4 = element4; }}
        ></span><br />
        <span
          className="home-arrow"
          ref={(element5) => { this.element5 = element5; }}
        ></span>

        <div className="phone-container">
          <div className="phone">
            <div className="top"></div>
            <div className="left"></div>
            <div className="center-bg"></div>
            <div className="center"></div>
            <div className="home-button"></div>
            <div className="speaker"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="back"></div>
            <div className="bottom-right-1"></div>
            <div className="bottom-right-2"></div>
            <div className="bottom-left-1"></div>
            <div className="bottom-left-2"></div>
            <div className="top-right-1"></div>
            <div className="top-right-2"></div>
            <div className="top-left-1"></div>
            <div className="top-left-2"></div>
          </div>
          <div className="phone-text">
            <div className="header-container">
              <img src="/snap-ninja-logo.svg" /><h2>Snap Ninja</h2>
            </div>
            <p>Snap Ninja began as an idea to encourage collaboration and mentorship among students&mdash;a central theme at Turing School of Software & Design&mdash;and an important and common practice in the tech community.</p>
            <p>So we took a learning concept the tech world often gets right and encouraged students to join the fun.</p>
            <a className="details">DETAILS</a><span>&#8226;</span><span>&#8226;</span><span>&#8226;</span><a href="https://t-laird.com/snap-ninja/" className="live">LIVE VERSION</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;