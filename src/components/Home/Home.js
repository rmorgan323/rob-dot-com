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
      strings: ["I'm a software developer."],
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
      strings: ["Stuff. ^400 This way."],
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
      startDelay: 11500
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
    if (window.scrollY <= 800) {
      document.querySelector('.Home').classList.remove('red-bg');
    }
    if (window.scrollY > 800) {
      document.querySelector('.Home').classList.add('red-bg');
    }
    if (window.scrollY <= 1600) {
      document.querySelector('.Home').classList.remove('green-bg');
    }
    if (window.scrollY > 1600) {
      document.querySelector('.Home').classList.add('green-bg');
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
      </div>
    )
  }
}

export default Home;