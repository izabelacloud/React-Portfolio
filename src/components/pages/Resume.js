import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => (
  <div>
    <h1 className="resume-list">Resume</h1>

    <div className="resume-link">
    <a href="https://drive.google.com/file/d/1LwHVNKQVaa3L9yNnKfuTprYYG6AvWDyY/view?usp=sharing" target="blank" alt="Resume">Download my Resume</a>
    </div>

    <div className="resume-main">
        <div>
            <h4 className="">Skills</h4>
        </div>

        <div>
            <p>Full Stack Web Development program focusing on Front-end and Server-side and Database Architectures development.</p>
        </div>

        <div>
            <h5 className="header-space">Computer Science applied to JavaScript including:</h5>
        </div>

        <div>
            <ul>Algorithms (Searches, Sorts)</ul>
            <ul>Efficiency</ul>
            <ul>Time Complexity</ul>
            <ul>Big O Notation</ul>
            <ul>Data Structures</ul>
        </div>


        <div>
            <h5 className="header-space">Browser Based Technologies:</h5>
        </div>
        <div>
            <ul>HTML/CSS</ul>
            <ul>JavaScript/jQuery</ul>
            <ul>Responsive Design</ul>
            <ul>Bootstrap</ul>
            <ul>Handlebars</ul>
            <ul>Local Storage, Session Storage, IndexedDB</ul>
            <ul>React.js</ul>
        </div>

        <div>
            <h5 className="header-space">Server Side Development:</h5> 
        </div>

        <div>
            <ul>User Authentication</ul>
            <ul>Progressive Web Applications (PWAs)</ul>
            <ul>MERN Stack (MongoDB, Express.js, React.js, Node.js)</ul>
        </div>

        <div>
            <h5 className="header-space">Databases:</h5>
        </div>
        <div>
            <ul>MySQL, Sequelize</ul>
            <ul>MongoDB, Mongoose</ul>  
        </div>

        <div>
            <h5 className="header-space">API Interaction:</h5>
        </div>

        <div>
            <ul>API</ul>
            <ul>REST</ul>
            <ul>JSON</ul>
            <ul>AJAX</ul>
        </div>

    </div>


  </div>
);

export default Resume;