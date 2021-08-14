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
import projectImage1 from '../images/portfolio.PNG';
import projectImage2 from '../images/project-image-2.png';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="title" id="#projects">Projects</h1>

            {/* -------------------------- PROJECT 1 ------------------- */}
            <div className="project-1">
                <div className="project-left">
                    <div className="project-details-1">
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
                    <div className="project-image-1">
                        <a href="/">
                            <img src={projectImage1} alt="portfolio" />
                        </a>
                    </div>
                </div>
            </div>

            {/* -------------------------- PROJECT 2 ------------------- */}
            <div className="project-2">
                <div className="project-right">
                    <div className="project-image-2">
                        <a href="https://velular.herokuapp.com/">
                            <img src={projectImage2} alt="velular-2" />
                        </a>
                    </div>
                    <div className="project-details-2">
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
            <div className="project-3">
                <div className="project-details-3"></div>
                <div className="project-image-3"></div>
            </div>

            {/* -------------------------- PROJECT 4 ------------------- */}
            <div className="project-4">
                <div className="project-details-4"></div>
                <div className="project-image-4"></div>
            </div>
        </div>
    );
};

export default Projects;