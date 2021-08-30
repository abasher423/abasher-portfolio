import '../Styles/Projects.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import html from '../images/html.png';
import sass from '../images/sass.png';
import js from '../images/js.png';
import css from '../images/css.png';
import react2 from '../images/react2.png';
import mui from '../images/mui.png';
import redux from '../images/redux.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongoose from '../images/mongoose.png';
import mongo from '../images/mongo.png';
import mongo2 from '../images/mongo2.png';
import vue from '../images/vue.png';
import java from '../images/java.png';
import projectImage1 from '../images/portfolio.PNG';
import projectImage2 from '../images/project-image-2.png';
import projectImage3 from '../images/ats.png';
import projectImage35 from '../images/project3.5.png';
import projectImage4 from '../images/rock-paper-scissors.png';
import projectImage5 from '../images/microsoft.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div id="projects">
            <h1 className="title">Projects</h1>

            {/* -------------------------- PROJECT 1 ------------------- */}
            <div className="project" data-aos="fade-up">
                <div className="project-left">
                    <div className="project-details">
                        <h2>Portfolio Website</h2>
                        <p>
                            This is a fully responsive portfolio website created by me. While working
                            on my website, I thought carefull about keeping my design polished and balanced.
                            I used grids, flex boxes and picked primary and secondary colors which contrasted 
                            well together. I ensured that the graphics go well together and used appropriate 
                            typography. This website was created using <span style={{ color: "#e44d26"}}>HTML,</span>
                             <span style={{ color: "#e88bb7"}}> <span style={{ color: "#379ad6"}}>CSS, </span>Sass, </span>
                             and <span style={{ color: "#f7df1d" }}> JavaScript</span>.
                        </p>
                        <div className="logos">
                            <img src={html} alt="HTML" />
                            <img src={css} alt="CSS" />
                            <img src={sass} alt="Sass" />
                            <img src={js} alt="JavaScript" />
                        </div>
                        <div className="links">
                            <a href="https://github.com/abasher423/abasher-portfolio">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faCodepen} size="1x"/> View the App
                            </a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="/">
                            <img src={projectImage1} alt="portfolio" />
                        </a>
                    </div>
                </div>
            </div>

            {/* -------------------------- PROJECT 2 ------------------- */}
            <div className="project" data-aos="fade-up">
                <div className="project-right">
                    <div className="project-image">
                        <a href="https://velular.herokuapp.com/">
                            <img src={projectImage2} alt="velular-2" />
                        </a>
                    </div>
                    <div className="project-details project-details-2">
                        <h2>Velular</h2>
                            <p>
                                Velular is an E-Commerce web application that allows users to buy and sell 
                                high-end custom sneakers. I created this Full-stack application using
                                React and light redux for the client-side and server-side Node.js, uses 
                                RESTful API. This website was created using <span style={{ color: "#e44d26"}}>HTML, </span>
                                <span style={{ color: "#389ad6"}}>CSS, </span> <span style={{ color: "#05a5d1"}}>React, </span>
                                <span style={{color: "#00b0ff"}}>Material-UI, </span><span style={{color: "#6b53c2"}}>light Redux, 
                                </span><span style={{ color: "#83cd29" }}> Node, </span><span style={{color: "#1b1b1b"}}>Express, </span>
                                <span style={{color: "#a73f3f"}}>Mongoose, </span> and<span style={{color: "#469739"}}> MongoDB</span>
                            </p>
                            <ul>
                                <li>Product Search</li>
                                <li>Product Review</li>
                                <li>Pagination</li>
                                <li>Shopping Cart</li>
                                <li>Order History</li> 
                                <li>Order Checkout</li>
                                <li>PayPal/Credit Card</li>
                                <li>Authentication</li>
                                <li>User Profile</li>
                            </ul>
                            <div className="logos">
                                <img src={html} alt="HTML" />
                                <img src={css} alt="CSS" />
                                <img src={react2} alt="React2" />
                                <img src={mui} alt="Material-UI" />
                                <img src={redux} alt="Redux" />
                                <img src={node} alt="Node.js" />
                            </div>
                            <div className="logos">
                            <img src={express} alt="Express.js" />
                                <img src={mongoose} alt="Mongoosejs" />
                                <img src={mongo} alt="Mongodb" />
                            </div>
                            <div className="links">
                            <a href="https://github.com/abasher423/Velular">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                            <a href="https://velular.herokuapp.com/">
                                <FontAwesomeIcon icon={faCodepen} size="1x"/> View the App
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------- PROJECT 3 ------------------- */}
            <div className="project" data-aos="fade-up">
                <div className="project-left">
                    <div className="project-details">
                        <h2>Air Ticket Sales</h2>
                        <p>
                            Contributed on developing the Air Ticket Sales (ATS) system which keeps records of tickets sold
                             by a Travel Agent company to customers and produce the reports required by the Financial Department.
                              It also allows a Travel Agent company to give discounts to their valued customers. This project was
                               created using <span style={{ color: "#e44d26"}}>HTML,</span>
                             <span style={{ color: "#379ad6"}}>CSS, </span><span style={{color: "#41b783"}}>Vue, </span>
                             <span style={{color: "#83cd29"}}>Node, </span> and <span style={{ color: "#469739" }}> MongoDB</span>.
                        </p>
                        <div className="logos logos-2">
                            <img src={html} alt="HTML" />
                            <img src={css} alt="CSS" />
                            <img src={vue} alt="Vue" />
                            <img src={node} alt="Nodejs" />
                            <img src={mongo2} alt="MongoDB" />
                        </div>
                        <div className="links">
                            <a href="https://github.com/abasher423/abasher-portfolio">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://github.com/abasher423/abasher-portfolio">
                            <img src={projectImage3} alt="portfolio" />
                        </a>
                    </div>
                </div>
            </div>

             {/* -------------------------- PROJECT 3.5 ------------------- */}
            <div className="project" data-aos="fade-up">
                <div className="project-right">
                    <div className="project-image">
                        <a href="https://github.com/abasher423/compiler">
                            <img src={projectImage35} alt="portfolio" />
                        </a>
                    </div>
                    <div className="project-details">
                        <h2>Java Compiler</h2>
                        <p>
                            This is a Java project i completed as part of my studies. The task involved given functional code for
                             parsing, build a symbol table, type checking and variable allocation portotype. The basic compiler supported method
                              declaration, method calls and arrays. This project really gave me an insight into how a compiler functions
                               and hands on experience using Java.
                        </p>
                        <div className="logos logos-2">
                            <img src={java} alt="Java" />
                        </div>
                        <div className="links">
                            <a href="https://github.com/abasher423/compiler">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------- PROJECT 4 ------------------- */}
            <div className="project" data-aos="fade-up">
                <div className="project-left">
                    <div className="project-details">
                        <h2>Rock Paper Scissors</h2>
                            <p>
                                This is a simple yet rewarding rock-paper-scissors game as I have learnt vital web development principles.
                                 I implemented key JavaScript fundamentals and learnt about the DOM and DOM manipulation, the use and
                                  importance of event delegation and event listeners, and why we even use frontend libraries such
                                   as React, Vue etc. This website was created using <span style={{ color: "#e44d26"}}>HTML, </span> 
                                <span style={{ color: "#389ad6"}}> CSS</span> and<span style={{color: "#f7df1d"}}> JavaScript.</span>
                            </p>
                            <div className="logos">
                                <img src={html} alt="HTML" />
                                <img src={css} alt="CSS" />
                                <img src={js} alt="JavaScript" />
                            </div>
                            <div className="links">
                            <a href="https://github.com/abasher423/rock-paper-scissors">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                            <a href="https://abasher423.github.io/rock-paper-scissors/">
                                <FontAwesomeIcon icon={faCodepen} size="1x"/> View the App
                            </a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://abasher423.github.io/rock-paper-scissors/">
                            <img src={projectImage4} alt="rock-paper-scissors" />
                        </a>
                    </div>
                </div>
            </div>


            {/* -------------------------- PROJECT 5 ------------------- */}
            <div className="project" data-aos="fade-up">
            <div className="project-right">
                    <div className="project-image">
                        <a href="https://abasher423.github.io/microsoft/">
                            <img src={projectImage5} alt="microsoft" />
                        </a>
                    </div>
                    <div className="project-details">
                        <h2>Microsoft Clone</h2>
                        <p>
                            This is a Microsoft landing page clone developed using pure HTML and CSS. The main aim of this project 
                            was to become more fluent with the mark up language and confident with CSS styling and
                                positioning elements. This website was created using only <span style={{ color: "#e44d26"}}>HTML </span> and 
                            <span style={{ color: "#389ad6"}}> CSS.</span>
                        </p>
                        <div className="logos">
                            <img src={html} alt="HTML" />
                            <img src={css} alt="CSS" />
                        </div>
                        <div className="links">
                            <a href="https://github.com/abasher423/microsoft">
                                <FontAwesomeIcon icon={faGithub} size="1x"/> View on GitHub
                            </a>
                            <a href="https://abasher423.github.io/microsoft/">
                                <FontAwesomeIcon icon={faCodepen} size="1x"/> View the App
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;