import '../Styles/Projects.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import html from '../images/html.png';
import sass from '../images/sass.png';
import js from '../images/js.png';
import portfolio from '../images/portfolio.PNG';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="title" id="#works">Projects</h1>

            <div className="project-1">
                <div className="project-left">
                    <div className="project-details-1">
                        <h2>Portfolio Website</h2>
                        <br />
                        <p>
                            This is a fully responsive portfolio website created by me. While working
                            on my website, I thought carefull about keeping my design polished and balanced.
                            I used grids, flex boxes and picked primary and secondary colors which contrasted 
                            well together. I ensured that the graphics go well together and used appropriate 
                            typography. This website was created using <span style={{ color: "#e44d26"}}>HTML</span>
                            , <span style={{ color: "#e88bb7"}}>Sass</span> and <span style={{ color: "#f7df1d" }}>
                            JavaScript</span>.
                        </p>
                        <br />
                        <div className="logos">
                            <img src={html} alt="HTML" />
                            <img src={sass} alt="Sass" />
                            <img src={js} alt="JavaScript" />
                        </div>
                        <br />
                        <a href="https://github.com/abasher423/abasher-portfolio">
                            <FontAwesomeIcon icon={faGithub} size="2x"/> View on GitHub
                        </a>
                    </div>
                    <div className="project-image-1">
                        <img src={portfolio} alt="portfolio" />
                    </div>
                </div>
            </div>
            <div className="project-2">
                <div className="project-right">
                    <div className="project-image-2"></div>
                    <div className="project-details-2"></div>
                </div>
            </div>
            <div className="project-3">
                <div className="project-details-3"></div>
                <div className="project-image-3"></div>
            </div>
            <div className="project-4">
                <div className="project-details-4"></div>
                <div className="project-image-4"></div>
            </div>
        </div>
    );
};

export default Projects;