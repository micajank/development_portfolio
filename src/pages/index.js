import React from 'react';
import { Link } from 'react-router-dom';
import myData from '../assets/assets/content.json'
import resume from '../assets/assets/Resumé-Jankowski.pdf';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/assets/images/fishing.png';
import pic2 from '../assets/assets/images/greenAndGrow.png';
import pic3 from '../assets/assets/images/noScroll.png';
import profilePic from '../assets/assets/images/profile.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            React - Python - JavaScript - Flask - PostgreSQL     
            <br />
            HTML5/Canvas - CSS - SQLAlchemy - Express - Node 
          </h2>
          <p>
          I am a full stack developer with experience using HTML, CSS, Javascript and React to create dynamic and efficient web applications. My ability to communicate and adapt to a constantly changing environment makes me an asset on team projects and in leadership roles. My undergraduate training in Anthropology enables me to approach challenges from multiple angles while producing curated solutions to the objectives at hand.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            {myData.projects[0].name}
          </h2>
          <p>
          {myData.projects[0].summary}
          <br />
          <div>
          {myData.projects[0].skills}
          </div>
          <br />
          <br />
          <div>
          <a target="_blank" href={`${myData.projects[0].liveLink}`}>See it HERE</a>
          </div>
          <div>
          <a target="_blank" href={`${myData.projects[0].githubLink}`}>Github</a>
          </div>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            {myData.projects[1].name}
          </h2>
          <p>
          {myData.projects[1].summary}
          <br />
          <div>
          {myData.projects[1].skills}
          </div>
          <br />
          <br />
          <div>
          <a target="_blank" href={`${myData.projects[1].liveLink}`}>See it HERE</a>
          </div>
          <div>
          <a target="_blank" href={`${myData.projects[1].githubLink}`}>Github</a>
          </div>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            {myData.projects[2].name}
          </h2>
          <p>
            {myData.projects[2].summary}
            <br />
            <div>
              { myData.projects[2].skills}
            </div>
            <br />
            <br />
            <div>
              <a target="_blank" href={`${myData.projects[2].liveLink}`}>See it HERE</a>
            </div>
            <div>
              <a target="_blank" href={`${myData.projects[2].githubLink}`}>Github</a>
            </div>
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <img className="profile" src={`${profilePic}`}></img>
          <br />
          <h2>A bit more about me</h2>
          <p>
            In 2016, I took my first computer science class at the University of Michigan while persuing my degree in Anthropology. I was originally taking the class to fulfill a requirement for my major, but after a few weeks I was completely hooked. I enjoyed the challenges and the hard work that each project demanded. I loved the break through feeling when I would finally locate the error that was throwing a seg fault in my code. And there was nothing like the feeling of completing a project that passed the entire test suite.
            <br />
            Although I was passionate about both fields of study, after graduating in August of 2019, I decided to dedicate myself to becoming a software developer. 
            <br />
            I moved to Seattle in January of 2020 to attend a 13 week Software Engineering Immersive at General Assembly. While there, I learned many industry tools and languages through personal projects, homeworks, and labs along with my 12 cohort members. Post cohort, I am continuing to learn and grow my skills through projects, updating past works, and algorithm and data structures studies. 
            <br />
            I am currently looking for full time work in the Seattle area.
          </p>
        </header>
        <ul className="features">
          <li id="four" className="icon fa-paper-plane">
            <h3>Contact Me</h3>
            {myData.email}
          </li>
          <li className="icon solid fa-laptop">
            <h3>Links</h3>
            <p>
              <a target="noopener" href={`${resume}`}>Resume</a> | 
              <a target="noopener" href={`${myData.linkedInLink}`}> LinkedIn</a> | 
              <a target="noopener" href={`${myData.githubLink}`}> Github</a>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          Thank you for checking out my work!
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Back To Top
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
